import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controller
import { ProductColorController } from './product_color.controller';

// Service
import { ProductColorService } from './product_color.service';

// Entities
import { ProductColor } from './entities/product_color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductColor])],
  controllers: [ProductColorController],
  providers: [ProductColorService],
})
export class ProductColorModule {}
