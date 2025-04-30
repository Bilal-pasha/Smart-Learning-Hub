import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

interface User {
  name: string;
  password: string;
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  create(@Body() user: Partial<User>) {
    return this.authService.signIn(user.name, user.password);
  }
}
