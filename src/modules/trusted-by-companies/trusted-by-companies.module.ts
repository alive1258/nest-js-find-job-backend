import { Module } from '@nestjs/common';
import { TrustedByCompaniesService } from './trusted-by-companies.service';
import { TrustedByCompaniesController } from './trusted-by-companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrustedByCompany } from './entities/trusted-by-company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrustedByCompany])],
  controllers: [TrustedByCompaniesController],
  providers: [TrustedByCompaniesService],
  exports: [TrustedByCompaniesService],
})
export class TrustedByCompaniesModule {}
