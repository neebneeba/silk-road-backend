import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Entities
import { ProductVariation } from 'src/product_variation/entities/product_variation.entity';
import { ProductSize } from 'src/product_size/entities/product_size.entity';
import { ProductColor } from 'src/product_color/entities/product_color.entity';
import { Category } from 'src/category/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'date',
  })
  start_date: Date;

  @Column({
    type: 'date',
  })
  end_date: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @OneToMany(() => ProductVariation, (image) => image.product)
  variants: ProductVariation[];

  @OneToMany(() => ProductSize, (image) => image.product)
  sizes: ProductSize[];

  @OneToMany(() => ProductColor, (image) => image.product)
  colors: ProductColor[];

  @ManyToMany(() => Category)
  @JoinTable({
    name: 'product_categories',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    },
  })
  categories: Category[];
}
