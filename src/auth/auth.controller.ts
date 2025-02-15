import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto'; 
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Registro de usuario
  @Post('register')
  async register(@Body() registerDto: RegisterDto) { 
    return this.authService.register(registerDto); 
  }

  // Login de usuario
  @Post('login')
  async login(@Body() loginDto: LoginDto,
) {
    return this.authService.login(loginDto);
    

  }
}
