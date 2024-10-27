import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionItemService } from './transaction_item.service';
import { CreateTransactionItemDto } from './dto/create-transaction_item.dto';
import { UpdateTransactionItemDto } from './dto/update-transaction_item.dto';

@Controller('transaction-item')
export class TransactionItemController {
  constructor(private readonly transactionItemService: TransactionItemService) {}

  @Post()
  create(@Body() createTransactionItemDto: CreateTransactionItemDto) {
    return this.transactionItemService.create(createTransactionItemDto);
  }

  @Get()
  findAll() {
    return this.transactionItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionItemDto: UpdateTransactionItemDto) {
    return this.transactionItemService.update(+id, updateTransactionItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionItemService.remove(+id);
  }
}
