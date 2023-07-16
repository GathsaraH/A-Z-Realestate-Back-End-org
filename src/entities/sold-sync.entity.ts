import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'sold_sync_schema' })
export class SoldSyncEntity {
  @PrimaryGeneratedColumn('uuid',{name:'sold_id'})
  soldSyncId: string;
  @Column('jsonb', { name: 'sold_data' })
  soldData: object;
}
