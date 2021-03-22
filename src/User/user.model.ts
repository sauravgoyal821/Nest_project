import * as mongoose from "mongoose";
export const UserSchema =new mongoose.Schema({
    email:{type:String,required:true}, 
    firstname:{type:String,required:true}, 
    lastname:{type:String},
    password:{type:String,required:true}
})

export interface User extends mongoose.Document{
     email:string;
     firstname:string; 
     lastname:string;
     password:string;
}