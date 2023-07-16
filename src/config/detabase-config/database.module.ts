import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TypeOrmConfigService } from './typeorm-config.service';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        return await new DataSource(options).initialize();
      },
    }),
    /**
     * @Remove_this_for_now
     */

    // TypeOrmModule.forRootAsync({
    //   useClass: SyncTypeOrmConfigService,
    //   dataSourceFactory: async (options) => {
    //     return await new DataSource(options).initialize();
    //   },
    // }),
  ],
})
export class DatabaseModule {}
