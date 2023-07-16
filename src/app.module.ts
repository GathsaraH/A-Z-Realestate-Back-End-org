import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpUtilModule } from './http-util/http-util.module';
import { DatabaseModule } from './config/detabase-config/database.module';
import { AppConfigModule } from './config/app-config/app.config.module';
import { TerminusModule } from '@nestjs/terminus';
import { CronModule } from './cron/cron.module';
import { CloudAzModule } from './cloud-az/cloud-az.module';


@Module({
  imports: [DatabaseModule, AppConfigModule, TerminusModule, HttpUtilModule, CloudAzModule, CronModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
