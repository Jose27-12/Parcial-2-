import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { jwtConstants } from './constants/jwt.constant';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global:true,
      secret: jwtConstants.secret, // Cambia esto a una clave secreta más segura
      signOptions: { expiresIn: '10h' }, // Tiempo de expiración del token
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
