import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { SoldSyncEntity } from 'src/entities/sold-sync.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class DataProcessingService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}
  private readonly logger = new Logger(DataProcessingService.name);
  async processSoldPropertyData() {
    try {
      this.logger.debug(
        `Process Sold Property Data Start at :${new Date().toISOString()}`,
      );
      await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.query(
            `ALTER TABLE sold_schema RENAME TO temp_sold_schema;`,
          );

          await transactionalEntityManager.query(
            `ALTER TABLE sold_sync_schema RENAME TO sold_schema;`,
          );

          await transactionalEntityManager.query(
            `ALTER TABLE temp_sold_schema RENAME TO sold_sync_schema;`,
          );
          await transactionalEntityManager
            .getRepository(SoldSyncEntity)
            .clear();
        },
      );
      this.logger.debug(
        `Process Sold Property Data End at :${new Date().toISOString()}`,
      );
    } catch (error) {
      this.logger.debug(`Error At Process Sold Property Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
}
