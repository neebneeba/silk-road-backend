import { Test, TestingModule } from '@nestjs/testing';
import { ProductColorController } from './product_color.controller';
import { ProductColorService } from './product_color.service';

describe('ProductColorController', () => {
  let controller: ProductColorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductColorController],
      providers: [ProductColorService],
    }).compile();

    controller = module.get<ProductColorController>(ProductColorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
