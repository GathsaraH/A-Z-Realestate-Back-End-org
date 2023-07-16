import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { AxiosResponse } from 'axios';
import { DataProcessingService } from 'src/data-processing/data-processing.service';
import { LeaseEntity } from 'src/entities/lease.entity';
import { ReviewsEntity } from 'src/entities/reviews.entity';
import { SaleEntity } from 'src/entities/sale.entity';
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
        `Sync SaleProperty Data Start at : ${new Date().toISOString()}`,
      );
      //Start Database Syncing
      const saleProperty: AxiosResponse =
        await this.httpService.requestSalePropertyData();
      for (const item of saleProperty.data['items']) {
        await this.entityManager.getRepository(SaleEntity).save({
          saleData: item,
        });
      }
      // send data processing request
      await this.dataProcessingService.processSalePropertyData();
      this.logger.debug(
        `Sync SaleProperty Data End at : ${new Date().toISOString()}`,
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
      // send data processing request
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
        `Sync LeaseProperty Data Start at : ${new Date().toISOString()}`,
      );
      //Start Database Syncing
      const leaseProperty: AxiosResponse =
        await this.httpService.requestSalePropertyData();
      for (const item of leaseProperty.data['items']) {
        await this.entityManager.getRepository(LeaseEntity).save({
          leaseData: item,
        });
      }
      // send data processing request
      await this.dataProcessingService.processLeasePropertyData();
      this.logger.debug(
        `Sync LeaseProperty Data End at : ${new Date().toISOString()}`,
      );
    } catch (error) {
      this.logger.debug(`Error At LeaseProperty Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
  //@Cron(CronExpression.EVERY_30_SECONDS)
  async syncReviewsData() {
    try {
      this.logger.debug(
        `Sync Reviews Data Start at : ${new Date().toISOString()}`,
      );
      //Start Database Syncing
      const reviewsData: AxiosResponse =
        await this.httpService.requestReviewsData();
      //Check if retune array oo object
      if (Array.isArray(reviewsData.data['result'])) {
        for (const item of reviewsData.data['result']) {
          await this.entityManager.getRepository(ReviewsEntity).save({
            reviewData: item,
          });
        }
      } else {
        await this.entityManager.getRepository(ReviewsEntity).save({
          reviewData: reviewsData.data['result'],
        });
      }
      // send data processing request
      await this.dataProcessingService.processReviewsData();
      this.logger.debug(
        `Sync Reviews Data End at : ${new Date().toISOString()}`,
      );
    } catch (error) {
      this.logger.debug(`Error At Reviews Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
}
