import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Entities
import { User } from 'src/user/entities/user.entity';
import { ProductVariation } from 'src/product_variation/entities/product_variation.entity';
import { TransactionItem } from 'src/transaction_item/entities/transaction_item.entity';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: 1,
  })
  quantity: number;

  @Column({
    default: false,
  })
  is_ordered: boolean;

  @Column({
    default: false,
  })
  is_removed: boolean;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.cart_items)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @ManyToOne(() => ProductVariation, (category) => category.cart_items)
  @JoinColumn({
    name: 'product_variation_id',
  })
  product_variation: ProductVariation;

  @OneToMany(() => TransactionItem, (transactionItem) => transactionItem.item)
  transactions: TransactionItem[];
}
