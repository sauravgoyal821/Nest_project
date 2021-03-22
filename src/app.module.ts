import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { AuthModule } from './Auth/auth.module';
import { UserModule } from './User/user.module';
@Module({
  imports: [AuthModule,UserModule,MongooseModule.forRoot('mongodb://localhost/db')],
  controllers: [AppController],
  providers: [AppService],    // creating instanse for constructor every time a class is built done by nest itself
})
export class AppModule {}
