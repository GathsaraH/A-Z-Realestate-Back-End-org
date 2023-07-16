import { Module } from '@nestjs/common';
import { CloudAzService } from './cloud-az.service';
import { CloudAzController } from './cloud-az.controller';

@Module({
  controllers: [CloudAzController],
  providers: [CloudAzService]
})
export class CloudAzModule {}
