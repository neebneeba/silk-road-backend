import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controller
import { ProductVariationController } from './product_variation.controller';

// Service
import { ProductVariationService } from './product_variation.service';

// Entities
import { ProductVariation } from './entities/product_variation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductVariation])],
  controllers: [ProductVariationController],
  providers: [ProductVariationService],
})
export class ProductVariationModule {}
