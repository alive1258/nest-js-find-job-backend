import { Injectable } from '@nestjs/common';
import { CreateTrustedByCompanyDto } from './dto/create-trusted-by-company.dto';
import { UpdateTrustedByCompanyDto } from './dto/update-trusted-by-company.dto';

@Injectable()
export class TrustedByCompaniesService {
  create(createTrustedByCompanyDto: CreateTrustedByCompanyDto) {
    return 'This action adds a new trustedByCompany';
  }

  findAll() {
    return `This action returns all trustedByCompanies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trustedByCompany`;
  }

  update(id: number, updateTrustedByCompanyDto: UpdateTrustedByCompanyDto) {
    return `This action updates a #${id} trustedByCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} trustedByCompany`;
  }
}
