import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';

// Entities
import { User } from './user/entities/user.entity';
import { Product } from './product/entities/product.entity';
import { ProductVariation } from './product_variation/entities/product_variation.entity';
import { ProductSize } from './product_size/entities/product_size.entity';
import { ProductColor } from './product_color/entities/product_color.entity';
import { Category } from './category/entities/category.entity';
import { CartItem } from './cart_item/entities/cart_item.entity';
import { Order } from './order/entities/order.entity';
import { Transaction } from './transaction/entities/transaction.entity';
import { TransactionItem } from './transaction_item/entities/transaction_item.entity';

// Modules
import { UserModule } from './user/user.module';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ProductSizeModule } from './product_size/product_size.module';
import { CategoryModule } from './category/category.module';
import { TransactionModule } from './transaction/transaction.module';
import { ProductColorModule } from './product_color/product_color.module';
import { ProductVariationModule } from './product_variation/product_variation.module';
import { CartItemModule } from './cart_item/cart_item.module';
import { OrderModule } from './order/order.module';
import { TransactionItemModule } from './transaction_item/transaction_item.module';

// Utils
import envHelper from './_utils/env_helper.util';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envHelper(),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'silk_road',
      synchronize: true,
      entities: [
        User,
        Product,
        ProductVariation,
        ProductSize,
        ProductColor,
        Category,
        CartItem,
        Order,
        Transaction,
        TransactionItem,
      ],
    }),
    UserModule,
    AuthModule,
    ProductModule,
    ProductSizeModule,
    CategoryModule,
    TransactionModule,
    ProductColorModule,
    ProductVariationModule,
    CartItemModule,
    OrderModule,
    TransactionItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
