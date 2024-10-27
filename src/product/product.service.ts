import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Services
import { CategoryService } from 'src/category/category.service';

// Entities
import { Product } from './entities/product.entity';

// Dtos
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private readonly categoryService: CategoryService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const categories = await this.categoryService.findByIds(
      createProductDto.categories,
    );

    await this.productRepository.save({
      name: createProductDto.name,
      description: createProductDto.description,
      start_date: new Date(createProductDto.start_date),
      end_date: new Date(createProductDto.end_date),
      categories,
    });

    return 'Product created!';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
