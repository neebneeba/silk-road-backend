import { Injectable } from '@nestjs/common';
import { CreateProductColorDto } from './dto/create-product_color.dto';
import { UpdateProductColorDto } from './dto/update-product_color.dto';

@Injectable()
export class ProductColorService {
  create(createProductColorDto: CreateProductColorDto) {
    return 'This action adds a new productColor';
  }

  findAll() {
    return `This action returns all productColor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productColor`;
  }

  update(id: number, updateProductColorDto: UpdateProductColorDto) {
    return `This action updates a #${id} productColor`;
  }

  remove(id: number) {
    return `This action removes a #${id} productColor`;
  }
}
