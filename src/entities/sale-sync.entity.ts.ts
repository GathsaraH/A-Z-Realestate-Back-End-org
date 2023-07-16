import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity({ name: 'sale_entity' })
export class SaleSyncEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'sale_sync_id' })
  saleSyncId: string;
  @Column('jsonb', { name: 'sale_data' })
  saleData: object;
}
