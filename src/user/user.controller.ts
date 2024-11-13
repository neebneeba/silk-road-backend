import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

// Services
import { UserService } from './user.service';

// Dtos
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    this.userService
      .create(createUserDto)
      .then(() => {
        res.send('User registered successfully!');
      })
      .catch((error) => {
        if (error instanceof QueryFailedError) {
          res.status(HttpStatus.BAD_REQUEST).send(error.message);
        } else {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      });
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
