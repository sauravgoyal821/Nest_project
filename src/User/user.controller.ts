import { Controller,Post,Body,Get,Param, UseGuards, Request } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { get } from "node:http";
import { brotliDecompressSync } from "node:zlib";
import { JwtAuthGuard } from "src/Auth/jwt-auth.guard";
import {UserService} from "./user.service";
@Controller()
export class UserController {
    constructor(private UserService : UserService){}

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        let email_id=req.user.email;
        return this.UserService.getdata(email_id);
      }


};