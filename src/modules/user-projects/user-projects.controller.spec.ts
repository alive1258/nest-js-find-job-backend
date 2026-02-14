import { Test, TestingModule } from '@nestjs/testing';
import { UserProjectsController } from './user-projects.controller';
import { UserProjectsService } from './user-projects.service';

describe('UserProjectsController', () => {
  let controller: UserProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserProjectsController],
      providers: [UserProjectsService],
    }).compile();

    controller = module.get<UserProjectsController>(UserProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
