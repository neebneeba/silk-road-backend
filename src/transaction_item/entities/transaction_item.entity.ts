import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

// Entity
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { CartItem } from 'src/cart_item/entities/cart_item.entity';

@Entity()
export class TransactionItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Transaction, (transaction) => transaction.items)
  @JoinColumn({
    name: 'transaction_id',
  })
  transaction: Transaction;

  @ManyToOne(() => CartItem, (transaction) => transaction.transactions)
  @JoinColumn({
    name: 'item_id',
  })
  item: CartItem;
}
