import { Injectable } from '@nestjs/common';
import { CreateTransactionItemDto } from './dto/create-transaction_item.dto';
import { UpdateTransactionItemDto } from './dto/update-transaction_item.dto';

@Injectable()
export class TransactionItemService {
  create(createTransactionItemDto: CreateTransactionItemDto) {
    return 'This action adds a new transactionItem';
  }

  findAll() {
    return `This action returns all transactionItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transactionItem`;
  }

  update(id: number, updateTransactionItemDto: UpdateTransactionItemDto) {
    return `This action updates a #${id} transactionItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionItem`;
  }
}
