import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { LeaseSyncEntity } from 'src/entities/lease-sync.entity';
import { ReviewsSyncEntity } from 'src/entities/reviews-sync.entity';
import { SaleSyncEntity } from 'src/entities/sale-sync.entity.ts';
import { SoldSyncEntity } from 'src/entities/sold-sync.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class DataProcessingService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}
  private readonly logger = new Logger(DataProcessingService.name);
  async processSalePropertyData() {
    try {
      this.logger.debug(
        `Process Sale Property Data Start at :${new Date().toISOString()}`,
      );
      await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.query(
            `ALTER TABLE sale_schema RENAME TO temp_sale_schema;`,
          );

          await transactionalEntityManager.query(
            `ALTER TABLE sale_sync_schema RENAME TO sale_schema;`,
          );

          await transactionalEntityManager.query(
            `ALTER TABLE temp_sale_schema RENAME TO sale_sync_schema;`,
          );
          await transactionalEntityManager
            .getRepository(SaleSyncEntity)
            .clear();
        },
      );
      this.logger.debug(
        `Process Sale Property Data End at :${new Date().toISOString()}`,
      );
    } catch (error) {
      this.logger.debug(`Error At Process Sale Property Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
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
  async processLeasePropertyData() {
    try {
      this.logger.debug(
        `Process Lease Property Data Start at :${new Date().toISOString()}`,
      );
      await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.query(
            `ALTER TABLE lease_schema RENAME TO temp_lease_schema;`,
          );

          await transactionalEntityManager.query(
            `ALTER TABLE lease_sync_schema RENAME TO lease_schema;`,
          );

          await transactionalEntityManager.query(
            `ALTER TABLE temp_lease_schema RENAME TO lease_sync_schema;`,
          );
          await transactionalEntityManager
            .getRepository(LeaseSyncEntity)
            .clear();
        },
      );
      this.logger.debug(
        `Process Lease Property Data End at :${new Date().toISOString()}`,
      );
    } catch (error) {
      this.logger.debug(`Error At Process Lease Property Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
  async processReviewsData() {
    try {
      this.logger.debug(
        `Process Reviews Data Start at :${new Date().toISOString()}`,
      );
      await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.query(
            `ALTER TABLE reviews_schema RENAME TO temp_reviews_schema;`,
          );

          await transactionalEntityManager.query(
            `ALTER TABLE reviews_sync_schema RENAME TO reviews_schema;`,
          );

          await transactionalEntityManager.query(
            `ALTER TABLE temp_reviews_schema RENAME TO reviews_sync_schema;`,
          );
          await transactionalEntityManager
            .getRepository(ReviewsSyncEntity)
            .clear();
        },
      );
      this.logger.debug(
        `Process Reviews Data End at :${new Date().toISOString()}`,
      );
    } catch (error) {
      this.logger.debug(`Error At Process Reviews Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
}
