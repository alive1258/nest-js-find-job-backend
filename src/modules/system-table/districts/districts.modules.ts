import { Module } from '@nestjs/common';
import { DistrictController } from './districts.controller';
import { DistrictService } from './districts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistrictEntity } from './entities/districts.entity';

@Module({
  controllers: [DistrictController],
  providers: [DistrictService],
  imports: [TypeOrmModule.forFeature([DistrictEntity])],
  exports: [DistrictService],
})
export class GendersModule {}
