import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectEntityManager } from '@nestjs/typeorm';
import { AxiosResponse } from 'axios';
import { DataProcessingService } from 'src/data-processing/data-processing.service';
import { LeaseSyncEntity } from 'src/entities/lease-sync.entity';
import { ReviewsSyncEntity } from 'src/entities/reviews-sync.entity';
import { SaleSyncEntity } from 'src/entities/sale-sync.entity.ts';
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

  @Cron(CronExpression.EVERY_30_SECONDS)
  async syncSalePropertyData() {
    try {
      this.logger.debug(
        `Sync SaleProperty Data Start at : ${new Date().toISOString()}`,
      );
      //Start Database Syncing
      const saleProperty: AxiosResponse =
        await this.httpService.requestSalePropertyData();
      const isDataSaved = await Promise.all(
        saleProperty.data['items'].map(async (item) => {
          return this.entityManager.getRepository(SaleSyncEntity).create(
            await this.entityManager.getRepository(SaleSyncEntity).save({
              saleData: item,
            }),
          );
        }),
      );
      // send data processing request
      if (isDataSaved.length) {
        await this.dataProcessingService.processSalePropertyData();
      }

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
      const isDataSaved = await Promise.all(
        soldProperty.data['items'].map(async (item) => {
          return this.entityManager.getRepository(SoldSyncEntity).create(
            await this.entityManager.getRepository(SoldSyncEntity).save({
              soldData: item,
            }),
          );
        }),
      );
      // send data processing request
      if (isDataSaved.length) {
        await this.dataProcessingService.processSoldPropertyData();
      }
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
        await this.httpService.requestLeasePropertyData();
      const isDataSaved = await Promise.all(
        leaseProperty.data['items'].map(async (item) => {
          return this.entityManager.getRepository(LeaseSyncEntity).create(
            await this.entityManager.getRepository(LeaseSyncEntity).save({
              leaseData: item,
            }),
          );
        }),
      );
      // send data processing request
      if (isDataSaved.length) {
        await this.dataProcessingService.processLeasePropertyData();
      }
      this.logger.debug(
        `Sync LeaseProperty Data End at : ${new Date().toISOString()}`,
      );
    } catch (error) {
      this.logger.debug(`Error At LeaseProperty Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
  // @Cron(CronExpression.EVERY_30_SECONDS)
  async syncReviewsData() {
    try {
      this.logger.debug(
        `Sync Reviews Data Start at : ${new Date().toISOString()}`,
      );
      //Start Database Syncing
      const reviewsData: AxiosResponse =
        await this.httpService.requestReviewsData();
      //define global variable
      let saveData = null;
      //Check if retune array oo object
      if (Array.isArray(reviewsData.data['result'])) {
        const isDataSaved = await Promise.all(
          reviewsData.data['result'].map(async (item) => {
            return this.entityManager.getRepository(ReviewsSyncEntity).create(
              await this.entityManager.getRepository(ReviewsSyncEntity).save({
                reviewData: item,
              }),
            );
          }),
        );
        if (isDataSaved.length) {
          saveData = isDataSaved.length;
        }
      } else {
        saveData= this.entityManager.getRepository(ReviewsSyncEntity).create(
          await this.entityManager.getRepository(ReviewsSyncEntity).save({
            reviewData: reviewsData.data['result'],,
          }),
        );
  
      }
      // send data processing request
      if(saveData !== null){
        await this.dataProcessingService.processReviewsData();
      }
      this.logger.debug(
        `Sync Reviews Data End at : ${new Date().toISOString()}`,
      );
    } catch (error) {
      this.logger.debug(`Error At Reviews Data at : ${error}`);
      throw new HttpException(error.message, 400);
    }
  }
}
