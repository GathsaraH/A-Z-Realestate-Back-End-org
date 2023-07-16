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
    hostOrg: process.env[`DATABASE_HOST`],
    postOrg: parseInt(process.env[`DATABASE_PORT`], 10) | 5432,
    usernameOrg: process.env[`DATABASE_USERNAME`],
    passwordOrg: process.env[`DATABASE_PASSWORD`],
    nameOrg: process.env[`DATABASE_NAME`],
    synchronizeOrg: process.env[`DATABASE_SYNCHRONIZE`],
    maxConnectionOrg:
      parseInt(process.env[`DATABASE_MAX_CONNECTIONS`], 10) || 100,
    sslEnabledOrg: process.env[`DATABASE_SSL_ENABLED`],
    rejectUnauthorizedOrg: process.env[`DATABASE_REJECT_UNAUTHORIZED`],
    nodeTlsRejectUnauthorizedOrg: process.env[`NODE_TLS_REJECT_UNAUTHORIZED`],
    //Sync Database Env Configs
    hostSync: process.env[`DATABASE_HOST`],
    postSync: parseInt(process.env[`DATABASE_PORT`], 10) | 5432,
    usernameSync: process.env[`DATABASE_USERNAME`],
    passwordSync: process.env[`DATABASE_PASSWORD`],
    nameSync: process.env[`DATABASE_NAME`],
    synchronizeSync: process.env[`DATABASE_SYNCHRONIZE`],
    maxConnectionSync:
      parseInt(process.env[`DATABASE_MAX_CONNECTIONS`], 10) || 100,
    sslEnabledSync: process.env[`DATABASE_SSL_ENABLED`],
    rejectUnauthorizedSync: process.env[`DATABASE_REJECT_UNAUTHORIZED`],
    nodeTlsRejectUnauthorizedSync: process.env[`NODE_TLS_REJECT_UNAUTHORIZED`],
  },
  externalApi: {
    externalApiToken: process.env[`EXTERNAL_API_TOKEN`],
    externalApiKey: process.env[`EXTERNAL_API_KEY`],
    externalSaleApi: process.env[`EXTERNAL_SALE_API`],
    externalSoldApi: process.env[`EXTERNAL_SOLD_API`],
    externalLeaseApi: process.env[`EXTERNAL_LEASE_API`],
  },
};
