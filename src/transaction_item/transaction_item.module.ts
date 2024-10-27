import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { TransactionItemController } from './transaction_item.controller';

// Services
import { TransactionItemService } from './transaction_item.service';

// Entities
import { TransactionItem } from './entities/transaction_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionItem])],
  controllers: [TransactionItemController],
  providers: [TransactionItemService],
})
export class TransactionItemModule {}
