import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import UserDTO from './users.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'get all users' })
  @ApiResponse({
    status: 200,
    description: 'The found User',
    type: UserDTO,
  })
  async getUsers() {
    return await this.UsersService.getUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get user by Id' })
  @ApiResponse({
    status: 200,
    description: 'The found User',
    type: UserDTO,
  })
  async getUserPerId(@Param('id') id: string) {
    return await this.UsersService.getUserPerId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 201, type: UserDTO })
  async createUser(@Body() User: UserDTO) {
    return await this.UsersService.createUser(User);
  }

  @Put()
  @ApiOperation({ summary: 'Update User' })
  @ApiResponse({ status: 201, type: UserDTO })
  async updateUser(@Body() User: UserDTO) {
    return await this.UsersService.updateUser(User);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete User' })
  async deleteUser(@Body() id: string) {
    return await this.UsersService.deleteUser(id);
  }
}
