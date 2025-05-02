import { Injectable } from '@nestjs/common';
import { UserService } from '@features/user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}
  async signIn(email, pass): Promise<any> {
    const user = await this.usersService.findByEmail(email as string);
    console.log(user, pass, 'user');
  }
}
