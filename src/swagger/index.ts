import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const SWAGGER_CONFIG = {
  title: 'TiendaMia',
  description: 'TiendaMia API description',
  version: '0.1',
  tag: 'Tiendamia',
};

export const Swagger = (app: INestApplication<any>) => {
  const config = new DocumentBuilder()
    .setTitle(SWAGGER_CONFIG.title)
    .setDescription(SWAGGER_CONFIG.description)
    .setVersion(SWAGGER_CONFIG.version)
    .addTag(SWAGGER_CONFIG.tag)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
};
