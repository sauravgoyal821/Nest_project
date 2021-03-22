import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength,IsOptional,IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({type:String,description:'email'})
  email: string;

  @IsNotEmpty()
  @ApiProperty({type:String,description:'firstname'})
 firstname: string

 @IsOptional()
 @ApiProperty({type:String,description:'lastname'})
 lastname: string

  @MinLength(6)
  @ApiProperty({type:String,description:'password'})
  password: string;
}

export class loginUserDto {
    @IsEmail()
    @ApiProperty({type:String,description:'email'})
    email: string;
    
    @IsOptional()
    firstname: string
   
    @IsOptional()
    lastname: string
   
    @MinLength(6)
    @ApiProperty({type:String,description:'password'})
    password: string;
  }