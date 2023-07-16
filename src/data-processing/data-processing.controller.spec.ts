import { Test, TestingModule } from '@nestjs/testing';
import { DataProcessingController } from './data-processing.controller';
import { DataProcessingService } from './data-processing.service';

describe('DataProcessingController', () => {
  let controller: DataProcessingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataProcessingController],
      providers: [DataProcessingService],
    }).compile();

    controller = module.get<DataProcessingController>(DataProcessingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
