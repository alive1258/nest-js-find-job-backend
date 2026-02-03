import { PartialType } from '@nestjs/swagger';
import { CreateTrustedByCompanyDto } from './create-trusted-by-company.dto';

export class UpdateTrustedByCompanyDto extends PartialType(CreateTrustedByCompanyDto) {}
