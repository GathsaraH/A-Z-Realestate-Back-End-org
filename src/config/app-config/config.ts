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
    host: process.env[`DATABASE_HOST`],
    post: parseInt(process.env[`DATABASE_PORT`], 10) | 5432,
    username: process.env[`DATABASE_USERNAME`],
    password: process.env[`DATABASE_PASSWORD`],
    name: process.env[`DATABASE_NAME`],
    synchronize: process.env[`DATABASE_SYNCHRONIZE`],
    maxConnection: parseInt(process.env[`DATABASE_MAX_CONNECTIONS`], 10) || 100,
    sslEnabled: process.env[`DATABASE_SSL_ENABLED`],
    rejectUnauthorized: process.env[`DATABASE_REJECT_UNAUTHORIZED`],
    nodeTlsRejectUnauthorized: process.env[`NODE_TLS_REJECT_UNAUTHORIZED`],
  },
  externalApi: {
    externalApiToken: process.env[`EXTERNAL_API_TOKEN`],
    externalApiKey: process.env[`EXTERNAL_API_KEY`],
    externalSaleApi: process.env[`EXTERNAL_SALE_API`],
    externalSoldApi: process.env[`EXTERNAL_SOLD_API`],
    externalLeaseApi: process.env[`EXTERNAL_LEASE_API`],
    externalReviewsApi: process.env[`EXTERNAL_REVIEWS_API`],
  },
};
