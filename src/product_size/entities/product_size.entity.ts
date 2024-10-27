import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Entities
import { Product } from 'src/product/entities/product.entity';

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

  @ManyToOne(() => Product, (product) => product.sizes)
  product: Product;
}
