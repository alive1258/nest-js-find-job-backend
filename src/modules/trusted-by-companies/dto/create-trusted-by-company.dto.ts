import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsNumber,
  IsOptional,
  IsUrl,
  Min,
  Max,
} from 'class-validator';

export class CreateTrustedByCompanyDto {
  /** Trusted company name */
  @ApiProperty({
    description: 'Name of the trusted company',
    example: 'Web Development',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  /** Image URL */
  @ApiProperty({
    description: 'Service image URL',
    example: 'https://example.com/image.jpg',
    required: false,
  })
  @IsUrl()
  @IsOptional()
  image?: string;
}

export class TrustedByCompanyResponseDto {
  @ApiProperty({ description: 'Trusted company UUID' })
  id: string;

  @ApiProperty({ description: 'Trusted company name' })
  name: string;

  @ApiProperty({ description: 'Image URL', required: false })
  image?: string;

  @ApiProperty({ description: 'Added by summary', type: Object })
  addedBy?: {
    id: string;
    name?: string;
    email?: string;
    role?: string;
  };

  @ApiProperty({ description: 'Creation timestamp' })
  created_at: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updated_at: Date;

  @ApiProperty({
    example: '2025-01-01T00:00:00.000Z',
    required: false,
  })
  deleted_at?: Date;
}
