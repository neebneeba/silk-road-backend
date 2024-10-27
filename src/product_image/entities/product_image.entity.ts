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
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @ManyToOne(() => Product, (product) => product.images)
  product: Product;
}
