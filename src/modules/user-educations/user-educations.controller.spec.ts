import { Test, TestingModule } from '@nestjs/testing';
import { UserEducationsController } from './user-educations.controller';
import { UserEducationsService } from './user-educations.service';

describe('UserEducationsController', () => {
  let controller: UserEducationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserEducationsController],
      providers: [UserEducationsService],
    }).compile();

    controller = module.get<UserEducationsController>(UserEducationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
