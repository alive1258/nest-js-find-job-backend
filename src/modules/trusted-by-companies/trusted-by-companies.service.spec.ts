import { Test, TestingModule } from '@nestjs/testing';
import { TrustedByCompaniesService } from './trusted-by-companies.service';

describe('TrustedByCompaniesService', () => {
  let service: TrustedByCompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrustedByCompaniesService],
    }).compile();

    service = module.get<TrustedByCompaniesService>(TrustedByCompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
