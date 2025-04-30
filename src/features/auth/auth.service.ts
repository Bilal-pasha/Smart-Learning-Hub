import { Injectable } from '@nestjs/common';
import { UserService } from '@features/user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}
  async signIn(username, pass): Promise<any> {
    console.log('username', username);
    const user = await this.usersService.findAll();
    console.log('user', user);
    console.log(pass, 'pass');
  }
}
