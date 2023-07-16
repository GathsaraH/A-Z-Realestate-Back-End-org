import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CloudAzService } from './cloud-az.service';
import { CreateCloudAzDto } from './dto/create-cloud-az.dto';
import { UpdateCloudAzDto } from './dto/update-cloud-az.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Cloud AZ Service')
@Controller('cloud-az')
export class CloudAzController {
  constructor(private readonly cloudAzService: CloudAzService) {}

  @Post()
  create(@Body() createCloudAzDto: CreateCloudAzDto) {
    return this.cloudAzService.create(createCloudAzDto);
  }

  @Get()
  findAll() {
    return this.cloudAzService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cloudAzService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCloudAzDto: UpdateCloudAzDto) {
    return this.cloudAzService.update(+id, updateCloudAzDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cloudAzService.remove(+id);
  }
}
