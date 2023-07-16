import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  @Cron(CronExpression.EVERY_30_SECONDS)
  async syncSalePropertyData() {
    try {
      this.logger.debug(
        `Sync SaleProperty Data at : ${new Date().toISOString()}`,
      );
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  @Cron(CronExpression.EVERY_30_SECONDS)
  async syncSoldPropertyData() {
    try {
      this.logger.debug(
        `Sync SoldProperty Data at : ${new Date().toISOString()}`,
      );
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  @Cron(CronExpression.EVERY_30_SECONDS)
  async syncLeasePropertyData() {
    try {
      this.logger.debug(
        `Sync LeaseProperty Data at : ${new Date().toISOString()}`,
      );
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  @Cron(CronExpression.EVERY_30_SECONDS)
  async syncReviewsData() {
    try {
      this.logger.debug(`Sync Reviews Data at : ${new Date().toISOString()}`);
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
