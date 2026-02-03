import { ApiPropertyOptional, IntersectionType } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean } from 'class-validator';
import { PaginationQueryDto } from 'src/common/data-query/dto/data-query.dto';

class GetTrustedByCompanyBaseDto {
  @ApiPropertyOptional({
    description: 'Filter by TrustedByCompany name (partial match)',
    example: 'Web Development',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Filter by active status',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}

export class GetTrustedByCompanyDto extends IntersectionType(
  GetTrustedByCompanyBaseDto,
  PaginationQueryDto,
) {}
