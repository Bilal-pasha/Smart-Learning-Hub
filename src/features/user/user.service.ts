import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { BcryptService } from '@shared/packages/bcrypt/bcrypt.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly bcryptService: BcryptService,
  ) {}

  async create(user: Partial<User>) {
    if (user.password) {
      const hashedPassword = await this.bcryptService.generatePassword(
        user.password,
      );
      user.password = hashedPassword;
    }
    console.log('user', user);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, user: Partial<User>) {
    return this.userRepository.update(id, user);
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
