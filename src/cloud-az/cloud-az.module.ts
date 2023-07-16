import { Module } from '@nestjs/common';
import { CloudAzService } from './cloud-az.service';
import { CloudAzController } from './cloud-az.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaseEntity } from 'src/entities/lease.entity';
import { LeaseSyncEntity } from 'src/entities/lease-sync.entity';
import { SoldEntity } from 'src/entities/sold.entity';
import { SoldSyncEntity } from 'src/entities/sold-sync.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SoldEntity,SoldSyncEntity])],
  controllers: [CloudAzController],
  providers: [CloudAzService],
  exports:[CloudAzService]
})
export class CloudAzModule {}
