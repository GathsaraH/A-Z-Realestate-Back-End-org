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
  //Default Database Config
  databaseTypeOrg: 'postgres',
  databaseHostOrg: systemConfig.database.hostOrg,
  databasePortOrg: systemConfig.database.postOrg,
  databasePasswordOrg: systemConfig.database.passwordOrg,
  databaseNameOrg: systemConfig.database.nameOrg,
  databaseUserNameOrg: systemConfig.database.usernameOrg,
  databaseSynchronizeOrg: systemConfig.database.synchronizeOrg,
  databaseMaxConnectionOrg: systemConfig.database.maxConnectionOrg,
  databaseSslEnabledOrg: systemConfig.database.sslEnabledOrg,
  databaseRejectUnauthorizedOrg: systemConfig.database.rejectUnauthorizedOrg,
  //Sync Database Config
  databaseTypeSync: 'postgres',
  databaseHostSync: systemConfig.database.hostSync,
  databasePortSync: systemConfig.database.postSync,
  databasePasswordSync: systemConfig.database.passwordSync,
  databaseNameSync: systemConfig.database.nameSync,
  databaseUserNameSync: systemConfig.database.usernameSync,
  databaseSynchronizeSync: systemConfig.database.synchronizeSync,
  databaseMaxConnectionSync: systemConfig.database.maxConnectionSync,
  databaseSslEnabledSync: systemConfig.database.sslEnabledSync,
  databaseRejectUnauthorizedSync: systemConfig.database.rejectUnauthorizedSync,
  //External Api Config
  externalApiToken: systemConfig.externalApi.externalApiToken,
  externalApiKey: systemConfig.externalApi.externalApiKey,
  externalSaleApi: systemConfig.externalApi.externalSaleApi,
  externalSoldApi: systemConfig.externalApi.externalSoldApi,
  externalLeaseApi: systemConfig.externalApi.externalLeaseApi,
  externalReviewsApi:systemConfig.externalApi.externalReviewsApi,
}));
