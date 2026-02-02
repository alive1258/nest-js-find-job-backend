import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DivisionController } from './divisions.controller';
import { DivisionService } from './divisions.service';
import { DivisionEntity } from './entities/divisions.entity';

@Module({
  controllers: [DivisionController],
  providers: [DivisionService],
  imports: [TypeOrmModule.forFeature([DivisionEntity])],
  exports: [DivisionService],
})
export class GendersModule {}
