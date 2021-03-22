import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { stringify } from 'node:querystring';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('user_auth_model')
    .setDescription('login and get data API')
    .setVersion('1.0')
    .addBearerAuth()
    // .addBearerAuth({type:'http', scheme:'bearer',bearerFormat:'Bearer'},
    //                 'Authorization')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
