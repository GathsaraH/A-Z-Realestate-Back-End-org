import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity({ name: 'sale_sync_schema' })
export class SaleSyncEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'sale_id' })
  saleId: string;
  @Column('jsonb', { name: 'sale_data' })
  saleData: object;
}
