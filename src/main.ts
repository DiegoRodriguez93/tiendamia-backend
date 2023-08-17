import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Swagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  Swagger(app);
  await app.listen(4000);
}
bootstrap();
