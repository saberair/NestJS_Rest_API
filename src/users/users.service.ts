import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { Repository } from 'typeorm';
import UserDTO from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  public async getUsers(): Promise<UserDTO[]> {
    return await this.userRepo.find();
  }

  public async getUserPerId(id: string): Promise<UserDTO> {
    return await this.userRepo.findOne({ id });
  }

  public async createUser(user: UserDTO): Promise<UserDTO> {
    return await this.userRepo.save(user);
  }

  public async updateUser(user: UserDTO): Promise<UserDTO> {
    return await this.userRepo.save(user);
  }

  public async deleteUser(id: string): Promise<UserDTO> {
    const userToRemove = await this.userRepo.findOne(id);
    if (!userToRemove) {
      throw Error('user not found');
    }
    return await this.userRepo.remove(userToRemove);
  }
}
