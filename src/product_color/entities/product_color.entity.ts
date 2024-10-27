import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Entities
import { Product } from 'src/product/entities/product.entity';
import { ProductVariation } from 'src/product_variation/entities/product_variation.entity';

@Entity()
export class ProductColor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @OneToMany(() => ProductVariation, (productImage) => productImage.color)
  public color_size: ProductVariation[];

  @ManyToOne(() => Product, (product) => product.colors)
  product: Product;
}
