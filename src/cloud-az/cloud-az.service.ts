import { HttpException, Injectable, Logger } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { getAllLeaseDto } from './dto/get-all-lease.dto';
import { LeaseEntity } from 'src/entities/lease.entity';
import { GetAllSoldDto } from './dto/get-all-sold.dto';
import { SoldEntity } from 'src/entities/sold.entity';
import { GetAllSaleDto } from './dto/get-all-sale.dto';
import { SaleEntity } from 'src/entities/sale.entity';
import { GetAllReviewsDto } from './dto/get-all-reviews.dto';
import { ReviewsEntity } from 'src/entities/reviews.entity';

@Injectable()
export class CloudAzService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}
  async getAllLease(dto: getAllLeaseDto) {
    try {
      const result = this.entityManager
        .getRepository(LeaseEntity)
        .createQueryBuilder();
      const totalLease = await result.getCount();
      const totalPages =
        totalLease % dto.limit === 0
          ? totalLease / dto.limit
          : Math.floor(totalLease / dto.limit) + 1;
      const lease = await result
        .offset(dto.offset)
        .limit(dto.limit)
        .getRawMany();
      return {
        total: totalLease,
        totalPages,
        data: lease,
      };
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  async getAllSold(dto: GetAllSoldDto) {
    try {
      const result = this.entityManager
        .getRepository(SoldEntity)
        .createQueryBuilder();
      const totalLease = await result.getCount();
      const totalPages =
        totalLease % dto.limit === 0
          ? totalLease / dto.limit
          : Math.floor(totalLease / dto.limit) + 1;
      const lease = await result
        .offset(dto.offset)
        .limit(dto.limit)
        .getRawMany();
      return {
        total: totalLease,
        totalPages,
        data: lease,
      };
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  async getAllSale(dto: GetAllSaleDto) {
    try {
      const result = this.entityManager
        .getRepository(SaleEntity)
        .createQueryBuilder();
      const totalLease = await result.getCount();
      const totalPages =
        totalLease % dto.limit === 0
          ? totalLease / dto.limit
          : Math.floor(totalLease / dto.limit) + 1;
      const lease = await result
        .offset(dto.offset)
        .limit(dto.limit)
        .getRawMany();
      return {
        total: totalLease,
        totalPages,
        data: lease,
      };
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  async getAllReviews(dto: GetAllReviewsDto) {
    try {
      const result = this.entityManager
        .getRepository(ReviewsEntity)
        .createQueryBuilder();
      const totalLease = await result.getCount();
      const totalPages =
        totalLease % dto.limit === 0
          ? totalLease / dto.limit
          : Math.floor(totalLease / dto.limit) + 1;
      const lease = await result
        .offset(dto.offset)
        .limit(dto.limit)
        .getRawMany();
      return {
        total: totalLease,
        totalPages,
        data: lease,
      };
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
