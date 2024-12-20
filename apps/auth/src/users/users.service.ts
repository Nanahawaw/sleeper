import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async createUser(createUser: CreateUserDto) {
    return this.usersRepository.create(createUser);
  }

  async getUser(id: string) {
    return this.usersRepository.findOne({ id });
  }
}
