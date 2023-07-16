import { Injectable } from '@nestjs/common';
import { CreateCloudAzDto } from './dto/create-cloud-az.dto';
import { UpdateCloudAzDto } from './dto/update-cloud-az.dto';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { LeaseEntity } from './entities/lease.entity';

@Injectable()
export class CloudAzService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ){}
  create(createCloudAzDto: CreateCloudAzDto) {
    return 'This action adds a new cloudAz';
  }

  findAll() {
    return `This action returns all cloudAz`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cloudAz`;
  }

  update(id: number, updateCloudAzDto: UpdateCloudAzDto) {
    return `This action updates a #${id} cloudAz`;
  }

  remove(id: number) {
    return `This action removes a #${id} cloudAz`;
  }
}
