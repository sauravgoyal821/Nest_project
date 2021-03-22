import { Injectable,UnauthorizedException } from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/User/user.model";
import { UserService } from "src/User/user.service";
import { JwtService } from '@nestjs/jwt';
const bcrypt=require('bcrypt');
@Injectable()
export class AuthService{
  constructor(@InjectModel('User') private readonly UserModel : Model<User>,
  private readonly UserService : UserService,
  private readonly jwtService:JwtService){};
    async registeruser(email:string,firstname:string,lastname:string,password:string){
          const new_user=new this.UserModel({
            email:email,
            firstname:firstname,
            lastname:lastname,
            password:password});
            new_user.save();
            const payload = { email:email};
            var access_token = this.jwtService.sign(payload);
        return {
          access_token,new_user,
           "message":"registered"
        };
    }

     validateUser_register(email_id: string) {
       console.log(email_id);
        const user = this.UserModel.findOne({email:email_id}).then((data)=>{return null});
        // if(user){
        //   console.log(user);
        // return null;}
        return 1;
      }

      async validateUser_login(email_id: string, pass: string): Promise<any> {
        const user = await this.UserModel.findOne({email:email_id});
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        throw new UnauthorizedException();
      }

      login(email:string,pass:string) {
          console.log(email);
        const payload = { email:email, password: pass};
        console.log(payload);
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
};