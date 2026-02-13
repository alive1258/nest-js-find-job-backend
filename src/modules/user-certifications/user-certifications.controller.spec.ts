import { Test, TestingModule } from '@nestjs/testing';
import { UserCertificationsController } from './user-certifications.controller';
import { UserCertificationsService } from './user-certifications.service';

describe('UserCertificationsController', () => {
  let controller: UserCertificationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCertificationsController],
      providers: [UserCertificationsService],
    }).compile();

    controller = module.get<UserCertificationsController>(UserCertificationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
