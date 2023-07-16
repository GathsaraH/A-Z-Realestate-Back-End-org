import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgTypeOrmConfigService } from './org-typeorm-config.service';
import { DataSource } from 'typeorm';
import { SyncTypeOrmConfigService } from './sync-typeorm-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: OrgTypeOrmConfigService,
      dataSourceFactory: async (options) => {
        return await new DataSource(options).initialize();
      },
    }),
    TypeOrmModule.forRootAsync({
      useClass: SyncTypeOrmConfigService,
      dataSourceFactory: async (options) => {
        return await new DataSource(options).initialize();
      },
    }),
  ],
})
export class DatabaseModule {}
