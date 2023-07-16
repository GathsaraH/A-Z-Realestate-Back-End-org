import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const buildSwagger = (app) => {
  const config = new DocumentBuilder()
    .setTitle(
      'Cloud AZ Website Service'
    )
    .setDescription('The documentation about Cloud AZ Website Service')
    .setVersion('1.0')
    .addBearerAuth({
      name: 'Authorization',
      in: 'header',
      type: 'apiKey',
    })
    .build();
  return SwaggerModule.createDocument(app, config);
};

export const setupSwagger = (app) => {
  const document = buildSwagger(app);
  SwaggerModule.setup('api/v1/docs', app, document);
};
