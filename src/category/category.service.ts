import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

// Entities
import { Category } from './entities/category.entity';

// Dtos
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    await this.categoryRepository.save({ ...createCategoryDto });

    return 'Category created successfully!';
  }

  async findByPagination(limit: number, page: number) {
    const categories = await this.categoryRepository.find({
      skip: limit * page,
      take: limit,
    });

    return {
      items: categories,
      count: await this.categoryRepository.count(),
    };
  }

  findAll() {
    return `This action returns all category`;
  }

  findByIds(ids: number[]) {
    return this.categoryRepository.find({
      where: {
        id: In(ids),
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
