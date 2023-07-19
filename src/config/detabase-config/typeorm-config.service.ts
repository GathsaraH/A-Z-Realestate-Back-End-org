import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { LeaseSyncEntity } from 'src/entities/lease-sync.entity';
import { LeaseEntity } from 'src/entities/lease.entity';
import { ReviewsSyncEntity } from 'src/entities/reviews-sync.entity';
import { ReviewsEntity } from 'src/entities/reviews.entity';
import { SaleSyncEntity } from 'src/entities/sale-sync.entity.ts';
import { SaleEntity } from 'src/entities/sale.entity';
import { SoldSyncEntity } from 'src/entities/sold-sync.entity';
import { SoldEntity } from 'src/entities/sold.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get('app.databaseType'),
      host: this.configService.get('app.databaseHost'),
      port: this.configService.get('app.databasePort'),
      username: this.configService.get('app.databaseUserName'),
      password: this.configService.get('app.databasePassword'),
      database: this.configService.get('app.databaseName'),
      //synchronize: this.configService.get('app.databaseSynchronizeOrg'),
      synchronize: true,
      dropSchema: false,
      keepConnectionAlive: true,
      // logging: this.configService.get('app.nodeEnv') !== 'production',
      logging: false,
      entities: [
        SaleEntity,
        SaleSyncEntity,
        SoldEntity,
        SoldSyncEntity,
        LeaseEntity,
        LeaseSyncEntity,
        ReviewsEntity,
        ReviewsSyncEntity,
      ],
      migrations: [__dirname + '/path/to/default/migrations/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/database-config/migrations',
        subscribersDir: 'subscriber',
      },
    } as TypeOrmModuleOptions;
  }
}
