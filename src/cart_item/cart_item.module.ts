import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { CartItemController } from './cart_item.controller';

// Services
import { CartItemService } from './cart_item.service';

// Entities
import { CartItem } from './entities/cart_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartItem])],
  controllers: [CartItemController],
  providers: [CartItemService],
})
export class CartItemModule {}
