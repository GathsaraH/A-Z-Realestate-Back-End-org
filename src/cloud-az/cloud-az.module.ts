import { Module } from '@nestjs/common';
import { CloudAzService } from './cloud-az.service';
import { CloudAzController } from './cloud-az.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaseEntity } from './entities/lease.entity';
import { LeaseSyncEntity } from './entities/lease-sync.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LeaseEntity,LeaseSyncEntity])],
  controllers: [CloudAzController],
  providers: [CloudAzService]
})
export class CloudAzModule {}
