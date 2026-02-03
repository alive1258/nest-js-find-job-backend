import { Test, TestingModule } from '@nestjs/testing';
import { TrustedByCompaniesController } from './trusted-by-companies.controller';
import { TrustedByCompaniesService } from './trusted-by-companies.service';

describe('TrustedByCompaniesController', () => {
  let controller: TrustedByCompaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrustedByCompaniesController],
      providers: [TrustedByCompaniesService],
    }).compile();

    controller = module.get<TrustedByCompaniesController>(TrustedByCompaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
