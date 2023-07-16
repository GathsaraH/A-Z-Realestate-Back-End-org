import { Controller } from '@nestjs/common';
import { DataProcessingService } from './data-processing.service';

@Controller('data-processing')
export class DataProcessingController {
  constructor(private readonly dataProcessingService: DataProcessingService) {}
}
