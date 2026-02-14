import { Module } from '@nestjs/common';
import { UserEducationsService } from './user-educations.service';
import { UserEducationsController } from './user-educations.controller';

@Module({
  controllers: [UserEducationsController],
  providers: [UserEducationsService],
})
export class UserEducationsModule {}
