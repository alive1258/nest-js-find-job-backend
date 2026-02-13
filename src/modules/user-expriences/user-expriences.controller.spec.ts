import { Test, TestingModule } from '@nestjs/testing';
import { UserExpriencesController } from './user-expriences.controller';
import { UserExpriencesService } from './user-expriences.service';

describe('UserExpriencesController', () => {
  let controller: UserExpriencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserExpriencesController],
      providers: [UserExpriencesService],
    }).compile();

    controller = module.get<UserExpriencesController>(UserExpriencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
