import { Test, TestingModule } from '@nestjs/testing';
import { UserCertificationsService } from './user-certifications.service';

describe('UserCertificationsService', () => {
  let service: UserCertificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCertificationsService],
    }).compile();

    service = module.get<UserCertificationsService>(UserCertificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
