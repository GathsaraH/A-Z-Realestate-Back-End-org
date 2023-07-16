import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateCloudAzDto } from './dto/create-cloud-az.dto';
import { UpdateCloudAzDto } from './dto/update-cloud-az.dto';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { SoldSyncEntity } from 'src/entities/sold-sync.entity';

@Injectable()
export class CloudAzService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

}
