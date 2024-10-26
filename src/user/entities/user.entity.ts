import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  profile_picture: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;
}
