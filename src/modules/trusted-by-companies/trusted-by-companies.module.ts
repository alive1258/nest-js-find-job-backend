import { Module } from '@nestjs/common';
import { TrustedByCompaniesService } from './trusted-by-companies.service';
import { TrustedByCompaniesController } from './trusted-by-companies.controller';

@Module({
  controllers: [TrustedByCompaniesController],
  providers: [TrustedByCompaniesService],
})
export class TrustedByCompaniesModule {}
