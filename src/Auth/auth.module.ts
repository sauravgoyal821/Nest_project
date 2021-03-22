import { Module } from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import { UserController } from "src/User/user.controller";
import { UserSchema } from "src/User/user.model";
import { UserModule } from "src/User/user.module";
import { UserService } from "src/User/user.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from "./jwt.strategy";
import { CreateUserDto } from "src/User/create-user.dto";
@Module({
    imports:[UserModule,MongooseModule.forFeature([{name:'User',schema:UserSchema}]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6000s' },
    })],
    controllers:[UserController,AuthController],
    providers:[UserService,AuthService,JwtStrategy,CreateUserDto]
})
export class AuthModule{};