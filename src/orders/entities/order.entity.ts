import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Item } from '../../items/entities/item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createDate: Date;

  @Column()
  status: string;

  @Column()
  client: string;

  @Column()
  shippingAddress: string;

  @Column()
  shippingPromise: Date;

  @OneToMany(() => Item, (item) => item.order, { eager: true })
  @JoinColumn()
  items: Item[];
}
