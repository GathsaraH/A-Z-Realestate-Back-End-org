import { PartialType } from '@nestjs/swagger';
import { CreateCloudAzDto } from './create-cloud-az.dto';

export class UpdateCloudAzDto extends PartialType(CreateCloudAzDto) {}
