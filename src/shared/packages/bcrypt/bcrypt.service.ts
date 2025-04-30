import { compare, hash } from 'bcryptjs';

import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptService {
  constructor() {}
  async generatePassword(password: string) {
    return await hash(password, 12);
  }

  async comparePassword(password: string, userPassword: string) {
    return await compare(password, userPassword);
  }
}
