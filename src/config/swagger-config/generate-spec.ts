import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import * as YAML from 'yaml';
import { buildSwagger } from './swagger.config';
import { AppModule } from '../../app.module';

export const setupSwaggerDoc = async () => {
  const app = await NestFactory.create(AppModule);

  const document = buildSwagger(app);
  fs.writeFileSync('openapi.yaml', YAML.stringify(document));
};

setupSwaggerDoc();
