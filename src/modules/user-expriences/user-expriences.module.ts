import { Module } from '@nestjs/common';
import { UserExpriencesService } from './user-expriences.service';
import { UserExpriencesController } from './user-expriences.controller';

@Module({
  controllers: [UserExpriencesController],
  providers: [UserExpriencesService],
})
export class UserExpriencesModule {}
