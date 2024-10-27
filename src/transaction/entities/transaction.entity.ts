import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Entities
import { TransactionItem } from 'src/transaction_item/entities/transaction_item.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  code: string;

  @Column()
  invoice: number;

  @Column({
    default: false,
  })
  is_fulfilled: boolean;

  @Column({
    default: false,
  })
  is_canceled: boolean;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @OneToMany(
    () => TransactionItem,
    (transactionItem) => transactionItem.transaction,
  )
  items: TransactionItem[];
}
