import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'lease_sync_schema' })
export class LeaseSyncEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'lease_sync_id' })
  leaseSyncId: string;
  @Column('jsonb', { name: 'lease_data' })
  leaseData: object;
}
