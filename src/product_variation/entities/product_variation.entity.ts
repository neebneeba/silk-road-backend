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
import { Product } from 'src/product/entities/product.entity';
import { ProductColor } from 'src/product_color/entities/product_color.entity';
import { ProductSize } from 'src/product_size/entities/product_size.entity';
import { User } from 'src/user/entities/user.entity';
import { CartItem } from 'src/cart_item/entities/cart_item.entity';

@Entity()
export class ProductVariation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image_path: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @ManyToOne(() => ProductColor, (color) => color.color_size)
  @JoinColumn({
    name: 'color_id',
  })
  color: ProductColor;

  @ManyToOne(() => ProductSize, (size) => size.size_color)
  @JoinColumn({
    name: 'size_id',
  })
  size: ProductSize;

  @ManyToOne(() => Product, (product) => product.variants)
  @JoinColumn({
    name: 'product_id',
  })
  product: Product;

  @OneToMany(
    () => CartItem,
    (questionToCategory) => questionToCategory.product_variation,
  )
  public cart_items: CartItem[];
}
