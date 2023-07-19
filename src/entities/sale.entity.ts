import { Entity, PrimaryGeneratedColumn,Column} from "typeorm";
@Entity({name:'sale_schema'})
export class SaleEntity{
    @PrimaryGeneratedColumn('uuid',{name:'sale_id'})
    saleId:string;
    @Column('jsonb', { name: 'sale_data' })
    saleData:object;
}