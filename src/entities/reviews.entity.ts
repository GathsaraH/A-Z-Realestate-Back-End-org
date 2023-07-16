import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'reviews_schema' })
export class ReviewsEntity {
  @PrimaryGeneratedColumn('uuid',{name:'review_id'})
  reviewId: string;
  @Column('jsonb', { name: 'review_data' })
  reviewData: object;
}
