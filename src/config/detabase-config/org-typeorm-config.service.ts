import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class OrgTypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'Org',
      type: this.configService.get('app.databaseTypeOrg'),
      host: this.configService.get('app.databaseHostOrg'),
      port: this.configService.get('app.databasePortOrg'),
      username: this.configService.get('app.databaseUserNameOrg'),
      password: this.configService.get('app.databasePasswordOrg'),
      database: this.configService.get('app.databaseNameOrg'),
      synchronize: this.configService.get('app.databaseSynchronizeOrg'),
      entities: [__dirname + '/path/to/default/entities/*.entity{.ts,.js}'],
      migrations: [__dirname + '/path/to/default/migrations/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/database-config/migrations',
        subscribersDir: 'subscriber',
      },
    } as TypeOrmModuleOptions;
  }
}
