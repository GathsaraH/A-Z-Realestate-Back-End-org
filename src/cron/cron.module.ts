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


@Module({
  imports: [ScheduleModule.forRoot(),TypeOrmModule.forFeature([SoldEntity,SoldSyncEntity]),HttpUtilModule,CloudAzModule],
  controllers: [CronController],
  providers: [CronService],
})
export class CronModule {}
