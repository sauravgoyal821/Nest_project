import { Injectable } from "@nestjs/common";
import {User} from "./user.model";
import {InjectModel} from "@nestjs/mongoose";
import { Model } from "mongoose";
const bcrypt=require('bcrypt');
@Injectable()
export class UserService{
  constructor(@InjectModel('User') private readonly UserModel : Model<User>){};

    async getdata(email_id:string){
        let data=await this.UserModel.findOne({email:email_id});
        data.password=undefined;
        return data;
    }

    hashpassword(password:string){
     return bcrypt.hash(password,12);
    }
};