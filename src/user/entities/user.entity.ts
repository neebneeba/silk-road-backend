import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Enums
import { Role } from 'src/_enum/role.enum';

// Entities
import { CartItem } from 'src/cart_item/entities/cart_item.entity';
import { Order } from 'src/order/entities/order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    unique: true,
  })
  phone_number: number;

  @Column({
    nullable: true,
  })
  profile_picture: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    nullable: true,
  })
  address: string;

  @Column({
    enum: Role,
    default: Role.User,
  })
  role: Role;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @OneToMany(() => CartItem, (cartItems) => cartItems.user)
  cart_items: CartItem[];

  @OneToMany(() => Order, (image) => image.user)
  orders: Order[];
}
