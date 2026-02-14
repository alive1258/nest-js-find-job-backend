import { Module } from '@nestjs/common';
import { UserCertificationsService } from './user-certifications.service';
import { UserCertificationsController } from './user-certifications.controller';

@Module({
  controllers: [UserCertificationsController],
  providers: [UserCertificationsService],
})
export class UserCertificationsModule {}
