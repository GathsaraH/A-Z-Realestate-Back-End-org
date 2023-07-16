import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { LeaseSyncEntity } from 'src/entities/lease-sync.entity';
import { SoldSyncEntity } from 'src/entities/sold-sync.entity';

@Injectable()
export class SyncTypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'Sync',
      type: this.configService.get('app.databaseTypeSync'),
      host: this.configService.get('app.databaseHostSync'),
      port: this.configService.get('app.databasePortSync'),
      username: this.configService.get('app.databaseUserNameSync'),
      password: this.configService.get('app.databasePasswordSync'),
      database: this.configService.get('app.databaseNameSync'),
      //synchronize: this.configService.get('app.databaseSynchronizeSync'),
      synchronize: true,
      dropSchema: false,
      autoLoadEntities: true,
      keepConnectionAlive: true,
      // logging: this.configService.get('app.nodeEnv') !== 'production',
      logging: true,
      entities: [LeaseSyncEntity,SoldSyncEntity],
      migrations: [__dirname + '/path/to/default/migrations/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/database-config/migrations',
        subscribersDir: 'subscriber',
      },
    } as TypeOrmModuleOptions;
  }
}
