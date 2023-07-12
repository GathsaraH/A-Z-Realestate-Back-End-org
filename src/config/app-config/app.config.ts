import { registerAs } from '@nestjs/config';
import { systemConfig } from './config';

export default registerAs('app', () => ({
  // General Config
  nodeEnv: systemConfig.nodeEnv,
  name: systemConfig.appName,
  port: systemConfig.port,
  apiPrefix: systemConfig.apiPrefix,
  fallbackLanguage: systemConfig.appFallBackLanguage,
  frontendUrl: systemConfig.frontendUrl,
  // Database Config
  databaseType: 'postgres',
  databaseHost: systemConfig.database.host,
  databasePort: systemConfig.database.post,
  databasePassword: systemConfig.database.password,
  databaseName: systemConfig.database.name,
  databaseUserName: systemConfig.database.username,
  databaseSynchronize: systemConfig.database.synchronize,
  databaseMaxConnection: systemConfig.database.maxConnection,
  databaseSslEnabled: systemConfig.database.sslEnabled,
  databaseRejectUnauthorized: systemConfig.database.rejectUnauthorized,
  //External Api Config
  externalApiToken: systemConfig.externalApi.externalApiToken,
  externalApiKey: systemConfig.externalApi.externalApiKey,
  externalSaleApi: systemConfig.externalApi.externalSaleApi,
  externalSoldApi: systemConfig.externalApi.externalSoldApi,
  externalLeaseApi: systemConfig.externalApi.externalLeaseApi,
}));
