import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionItemDto } from './create-transaction_item.dto';

export class UpdateTransactionItemDto extends PartialType(CreateTransactionItemDto) {}
