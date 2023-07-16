import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CronController } from './cron.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaseEntity } from 'src/entities/lease.entity';
import { LeaseSyncEntity } from 'src/entities/lease-sync.entity';
import { HttpUtilModule } from 'src/http-util/http-util.module';
import { CloudAzModule } from 'src/cloud-az/cloud-az.module';
import { SoldEntity } from 'src/entities/sold.entity';
import { SoldSyncEntity } from 'src/entities/sold-sync.entity';
import { DataProcessingModule } from 'src/data-processing/data-processing.module';
import { ReviewsEntity } from 'src/entities/reviews.entity';
import { ReviewsSyncEntity } from 'src/entities/reviews-sync.entity';
import { SaleEntity } from 'src/entities/sale.entity';
import { SaleSyncEntity } from 'src/entities/sale-sync.entity.ts';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([
      SoldEntity,
      SoldSyncEntity,
      LeaseEntity,
      LeaseSyncEntity,
      ReviewsEntity,
      ReviewsSyncEntity,
      SaleEntity,
      SaleSyncEntity,
    ]),
    HttpUtilModule,
    DataProcessingModule,
  ],
  controllers: [CronController],
  providers: [CronService],
})
export class CronModule {}
