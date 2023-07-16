import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CloudAzService } from './cloud-az.service';
import { CreateCloudAzDto } from './dto/create-cloud-az.dto';
import { UpdateCloudAzDto } from './dto/update-cloud-az.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Cloud AZ Service')
@Controller('cloud-az')
export class CloudAzController {
  constructor(private readonly cloudAzService: CloudAzService) {}
}
