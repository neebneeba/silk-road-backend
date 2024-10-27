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
import { ProductImage } from './product_image/entities/product_image.entity';
import { ProductSize } from './product_size/entities/product_size.entity';
import { Category } from './category/entities/category.entity';

// Modules
import { UserModule } from './user/user.module';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ProductImageModule } from './product_image/product_image.module';
import { ProductSizeModule } from './product_size/product_size.module';
import { CategoryModule } from './category/category.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env' : '.env.local',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'silk_road',
      synchronize: true,
      entities: [User, Product, ProductImage, ProductSize, Category],
    }),
    UserModule,
    AuthModule,
    ProductModule,
    ProductImageModule,
    ProductSizeModule,
    CategoryModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
