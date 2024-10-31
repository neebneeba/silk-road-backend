import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: process.env.CLIENT_ORIGIN,
  });

  await app.listen(process.env.PORT);

  console.log('Server started at: ' + process.env.PORT);
}
bootstrap();
