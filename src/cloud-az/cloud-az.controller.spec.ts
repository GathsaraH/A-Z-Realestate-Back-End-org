import { Test, TestingModule } from '@nestjs/testing';
import { CloudAzController } from './cloud-az.controller';
import { CloudAzService } from './cloud-az.service';

describe('CloudAzController', () => {
  let controller: CloudAzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CloudAzController],
      providers: [CloudAzService],
    }).compile();

    controller = module.get<CloudAzController>(CloudAzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
