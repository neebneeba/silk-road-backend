import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Entities
import { User } from 'src/user/entities/user.entity';
import { CartItem } from 'src/cart_item/entities/cart_item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  order_id: string;

  @ManyToOne(() => User, (product) => product.orders)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @OneToOne(() => CartItem)
  @JoinColumn({
    name: 'cart_item_id',
  })
  cart_item: CartItem;
}
