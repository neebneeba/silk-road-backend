import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { ProductSizeController } from './product_size.controller';

// Services
import { ProductSizeService } from './product_size.service';

// Entities
import { ProductSize } from './entities/product_size.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSize])],
  controllers: [ProductSizeController],
  providers: [ProductSizeService],
})
export class ProductSizeModule {}
