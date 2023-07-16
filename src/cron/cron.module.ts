import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CronController } from './cron.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaseEntity } from 'src/entities/lease.entity';
import { LeaseSyncEntity } from 'src/entities/lease-sync.entity';


@Module({
  imports: [ScheduleModule.forRoot(),TypeOrmModule.forFeature([LeaseEntity,LeaseSyncEntity])],
  controllers: [CronController],
  providers: [CronService],
})
export class CronModule {}
