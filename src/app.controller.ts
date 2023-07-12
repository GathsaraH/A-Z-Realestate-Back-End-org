import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeController, ApiTags } from '@nestjs/swagger';
//@ApiExcludeController()
@ApiTags('Health Check E/P')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health-check')
  healthCheck() {
    return this.appService.healthCheck();
  }
}
