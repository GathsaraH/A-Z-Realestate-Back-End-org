import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'sold_schema' })
export class SoldEntity {
  @PrimaryGeneratedColumn('uuid',{name:'sold_id'})
  soldId: string;
  @Column('jsonb', { name: 'sold_data' })
  soldData: object;
}
