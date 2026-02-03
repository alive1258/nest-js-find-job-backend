import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrustedByCompaniesService } from './trusted-by-companies.service';
import { CreateTrustedByCompanyDto } from './dto/create-trusted-by-company.dto';
import { UpdateTrustedByCompanyDto } from './dto/update-trusted-by-company.dto';

@Controller('trusted-by-companies')
export class TrustedByCompaniesController {
  constructor(private readonly trustedByCompaniesService: TrustedByCompaniesService) {}

  @Post()
  create(@Body() createTrustedByCompanyDto: CreateTrustedByCompanyDto) {
    return this.trustedByCompaniesService.create(createTrustedByCompanyDto);
  }

  @Get()
  findAll() {
    return this.trustedByCompaniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trustedByCompaniesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrustedByCompanyDto: UpdateTrustedByCompanyDto) {
    return this.trustedByCompaniesService.update(+id, updateTrustedByCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trustedByCompaniesService.remove(+id);
  }
}
