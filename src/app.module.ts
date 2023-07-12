import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpUtilModule } from './http-util/http-util.module';

@Module({
  imports: [HttpUtilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
