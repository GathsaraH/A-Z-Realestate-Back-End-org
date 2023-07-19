import { Module } from '@nestjs/common';
import { DataProcessingService } from './data-processing.service';
import { DataProcessingController } from './data-processing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoldEntity } from 'src/entities/sold.entity';
import { SoldSyncEntity } from 'src/entities/sold-sync.entity';
import { LeaseEntity } from 'src/entities/lease.entity';
import { LeaseSyncEntity } from 'src/entities/lease-sync.entity';
import { ReviewsEntity } from 'src/entities/reviews.entity';
import { ReviewsSyncEntity } from 'src/entities/reviews-sync.entity';
import { SaleEntity } from 'src/entities/sale.entity';
import { SaleSyncEntity } from 'src/entities/sale-sync.entity.ts';

@Module({
  imports: [
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
  ],
  controllers: [DataProcessingController],
  providers: [DataProcessingService],
  exports:[DataProcessingService]
})
export class DataProcessingModule {}
