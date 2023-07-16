import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'lease_schema'})
export class LeaseEntity {
  @PrimaryGeneratedColumn('uuid',{name:'lease_id'})
  leaseId: string;
  @Column('jsonb', { name: 'lease_data' })
  leaseData:object;
}

