import { IsEmail, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class LoginDto{
    
    @IsEmail()
    email:string;


    @Transform(({value }) =>  value.trim())
    @IsString()
    password:string;
}