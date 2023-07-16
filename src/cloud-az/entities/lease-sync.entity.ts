import { Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'lease_sync_schema'})
export class LeaseSyncEntity {
  @PrimaryGeneratedColumn('uuid')
  leaseId: string;
}

