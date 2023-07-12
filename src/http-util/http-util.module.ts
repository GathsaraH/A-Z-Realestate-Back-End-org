import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HttpUtilService } from './http-util.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [HttpUtilService],
  exports: [HttpUtilService],
})
export class HttpUtilModule {}
