import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'reviews_sync_schema' })
export class ReviewsSyncEntity {
  @PrimaryGeneratedColumn('uuid',{name:'review_id'})
  reviewId: string;
  @Column('jsonb', { name: 'review_data' })
  reviewData: object;
}
