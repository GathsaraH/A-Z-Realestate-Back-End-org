import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  Query,
  HttpCode,
} from '@nestjs/common';
import { CloudAzService } from './cloud-az.service';
import { ApiTags } from '@nestjs/swagger';
import { getAllLeaseDto } from './dto/get-all-lease.dto';
@ApiTags('Cloud AZ Service')
@Controller('cloud-az')
export class CloudAzController {
  constructor(private readonly cloudAzService: CloudAzService) {}
  @HttpCode(200)
  @Get('lease')
  async getAllLease(@Query() dto: getAllLeaseDto) {
    try {
      return this.cloudAzService.getAllLease(dto)
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
