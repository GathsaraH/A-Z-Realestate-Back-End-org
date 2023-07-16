require('dotenv').config();
export const systemConfig = {
  port: parseInt(process.env[`APP_PORT`], 10) || 3003,
  nodeEnv: process.env[`NODE_ENV`],
  appName: process.env[`APP_NAME`],
  apiPrefix: process.env[`API_PREFIX`] || 'api',
  appFallBackLanguage: process.env[`APP_FALLBACK_LANGUAGE`] || 'en',
  appHeaderLanguage: process.env[`APP_HEADER_LANGUAGE`],
  frontendUrl: process.env[`FRONTEND_URL`],
  database: {
    //Default Database Env Configs
    hostOrg: process.env[`DATABASE_HOST_ORG`],
    postOrg: parseInt(process.env[`DATABASE_PORT_ORG`], 10) | 5432,
    usernameOrg: process.env[`DATABASE_USERNAME_ORG`],
    passwordOrg: process.env[`DATABASE_PASSWORD_ORG`],
    nameOrg: process.env[`DATABASE_NAME_ORG`],
    synchronizeOrg: process.env[`DATABASE_SYNCHRONIZE_ORG`],
    maxConnectionOrg:
      parseInt(process.env[`DATABASE_MAX_CONNECTIONS_ORG`], 10) || 100,
    sslEnabledOrg: process.env[`DATABASE_SSL_ENABLED_ORG`],
    rejectUnauthorizedOrg: process.env[`DATABASE_REJECT_UNAUTHORIZED_ORG`],
    nodeTlsRejectUnauthorizedOrg: process.env[`NODE_TLS_REJECT_UNAUTHORIZED_ORG`],
    //Sync Database Env Configs
    hostSync: process.env[`DATABASE_HOST_SYNC`],
    postSync: parseInt(process.env[`DATABASE_PORT_SYNC`], 10) | 5432,
    usernameSync: process.env[`DATABASE_USERNAME_SYNC`],
    passwordSync: process.env[`DATABASE_PASSWORD_SYNC`],
    nameSync: process.env[`DATABASE_NAME_SYNC`],
    synchronizeSync: process.env[`DATABASE_SYNCHRONIZE_SYNC`],
    maxConnectionSync:
      parseInt(process.env[`DATABASE_MAX_CONNECTIONS_SYNC`], 10) || 100,
    sslEnabledSync: process.env[`DATABASE_SSL_ENABLED_SYNC`],
    rejectUnauthorizedSync: process.env[`DATABASE_REJECT_UNAUTHORIZED_SYNC`],
    nodeTlsRejectUnauthorizedSync: process.env[`NODE_TLS_REJECT_UNAUTHORIZED_SYNC`],
  },
  externalApi: {
    externalApiToken: process.env[`EXTERNAL_API_TOKEN`],
    externalApiKey: process.env[`EXTERNAL_API_KEY`],
    externalSaleApi: process.env[`EXTERNAL_SALE_API`],
    externalSoldApi: process.env[`EXTERNAL_SOLD_API`],
    externalLeaseApi: process.env[`EXTERNAL_LEASE_API`],
  },
};
