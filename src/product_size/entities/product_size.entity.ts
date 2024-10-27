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
export class ProductSize {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: string;

  @Column()
  image_path: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @OneToMany(() => ProductVariation, (productImage) => productImage.size)
  public size_color: ProductVariation[];

  @ManyToOne(() => Product, (product) => product.sizes)
  product: Product;
}
