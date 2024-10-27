import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { ProductImageController } from './product_image.controller';

// Services
import { ProductImageService } from './product_image.service';

// Entities
import { ProductImage } from './entities/product_image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductImage])],
  controllers: [ProductImageController],
  providers: [ProductImageService],
})
export class ProductImageModule {}
