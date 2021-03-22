import { Controller,Post,Body,Get,Param,UsePipes,ValidationPipe } from "@nestjs/common";
import { UserService } from "src/User/user.service";
import {AuthService} from "./auth.service";
import { CreateUserDto, loginUserDto } from "src/User/create-user.dto";
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { UserSchema } from "src/User/user.model";
@Controller()
export class AuthController{
   constructor(private AuthService : AuthService,
            private UserService:UserService){}

   @Post('register')
   @ApiCreatedResponse({description:"user registeration"})
   @ApiBody({type:CreateUserDto})
   @UsePipes(new ValidationPipe())
   async registerUser(@Body() createuserdata : CreateUserDto ){
    // let check=this.AuthService.validateUser_register(email);
    // if(check)
    return this.AuthService.registeruser(createuserdata.email,createuserdata.firstname,createuserdata.lastname,createuserdata.password);
    // else
    // return {"message":"email_id already exists"};
   }

   @Post('login')
   @ApiOkResponse({description:"user login"})
   @ApiUnauthorizedResponse({description:'Invalid credentials'})
   @ApiBody({type:loginUserDto})
   @UsePipes(new ValidationPipe())
   async loginUser(@Body() loginUserDto : loginUserDto){
          return this.AuthService.validateUser_login(loginUserDto.email,loginUserDto.password).then(data =>{
            return this.AuthService.login(loginUserDto.email,loginUserDto.password);
          }).catch(err =>{
              throw err;
          });
    }
}
