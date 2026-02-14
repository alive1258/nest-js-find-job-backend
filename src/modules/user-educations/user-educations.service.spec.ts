import { Test, TestingModule } from '@nestjs/testing';
import { UserEducationsService } from './user-educations.service';

describe('UserEducationsService', () => {
  let service: UserEducationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEducationsService],
    }).compile();

    service = module.get<UserEducationsService>(UserEducationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
