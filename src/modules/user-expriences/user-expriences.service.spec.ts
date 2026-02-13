import { Test, TestingModule } from '@nestjs/testing';
import { UserExpriencesService } from './user-expriences.service';

describe('UserExpriencesService', () => {
  let service: UserExpriencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserExpriencesService],
    }).compile();

    service = module.get<UserExpriencesService>(UserExpriencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
