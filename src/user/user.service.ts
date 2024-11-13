import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

// Entities
import { User } from './entities/user.entity';

// Enums
import { Role } from 'src/_enum/role.enum';

// Dtos
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

    createUserDto.password = hash;

    return this.userRepository.save({
      ...createUserDto,
    });
  }

  findAll() {
    return this.userRepository.find();
  }

  findByUsername(username: string) {
    return this.userRepository.findOne({
      where: {
        username,
      },
    });
  }

  findAdminByUsername(username: string) {
    return this.userRepository.findOne({
      where: {
        username,
        role: In([Role.Admin, Role.SuperAdmin]),
      },
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
