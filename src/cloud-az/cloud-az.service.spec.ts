import { Test, TestingModule } from '@nestjs/testing';
import { CloudAzService } from './cloud-az.service';

describe('CloudAzService', () => {
  let service: CloudAzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CloudAzService],
    }).compile();

    service = module.get<CloudAzService>(CloudAzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
