import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectEntityManager } from '@nestjs/typeorm';
import { AxiosResponse } from 'axios';
import { CloudAzService } from 'src/cloud-az/cloud-az.service';
import { DataProcessingService } from 'src/data-processing/data-processing.service';
import { SoldSyncEntity } from 'src/entities/sold-sync.entity';
import { HttpUtilService } from 'src/http-util/http-util.service';
import { EntityManager } from 'typeorm';

@Injectable()
export class CronService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
    private readonly httpService: HttpUtilService,
    private readonly dataProcessingService: DataProcessingService,
  ) {}
  private readonly logger = new Logger(CronService.name);

  //@Cron(CronExpression.EVERY_30_SECONDS)
  async syncSalePropertyData() {
    try {
      this.logger.debug(
        `Sync SaleProperty Data at : ${new Date().toISOString()}`,
      );
    } catch (error) {
      this.logger.debug(`Error At SaleProperty Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
  //@Cron(CronExpression.EVERY_30_SECONDS)
  async syncSoldPropertyData() {
    try {
      this.logger.debug(
        `Sync SoldProperty Data Start at : ${new Date().toISOString()}`,
      );
      //Start Database Syncing
      const soldProperty: AxiosResponse =
        await this.httpService.requestSoldPropertyData();
      for (const item of soldProperty.data['items']) {
        await this.entityManager.getRepository(SoldSyncEntity).save({
          soldData: item,
        });
      }
      // Swapping tables
      await this.dataProcessingService.processSoldPropertyData();
      this.logger.debug(
        `Sync SoldProperty Data End at : ${new Date().toISOString()}`,
      );
    } catch (error) {
      this.logger.debug(`Error At SoldProperty Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
  //@Cron(CronExpression.EVERY_30_SECONDS)
  async syncLeasePropertyData() {
    try {
      this.logger.debug(
        `Sync LeaseProperty Data at : ${new Date().toISOString()}`,
      );
    } catch (error) {
      this.logger.debug(`Error At LeaseProperty Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
  //@Cron(CronExpression.EVERY_30_SECONDS)
  async syncReviewsData() {
    try {
      this.logger.debug(`Sync Reviews Data at : ${new Date().toISOString()}`);
    } catch (error) {
      this.logger.debug(`Error At Reviews Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
}
