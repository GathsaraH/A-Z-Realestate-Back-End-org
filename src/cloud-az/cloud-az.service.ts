import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateCloudAzDto } from './dto/create-cloud-az.dto';
import { UpdateCloudAzDto } from './dto/update-cloud-az.dto';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { SoldSyncEntity } from 'src/entities/sold-sync.entity';

@Injectable()
export class CloudAzService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}
  private readonly logger = new Logger(CloudAzService.name);
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

  findAll() {
    return `This action returns all cloudAz`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cloudAz`;
  }

  update(id: number, updateCloudAzDto: UpdateCloudAzDto) {
    return `This action updates a #${id} cloudAz`;
  }

  remove(id: number) {
    return `This action removes a #${id} cloudAz`;
  }
}
