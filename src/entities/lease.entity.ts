import { Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'lease_schema'})
export class LeaseEntity {
  @PrimaryGeneratedColumn('uuid')
  leaseId: string;
}

