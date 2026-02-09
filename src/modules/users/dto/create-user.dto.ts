import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsUrl,
  IsArray,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  /* =========================
     BASIC INFO
  ========================== */

  @ApiProperty({
    description: 'Full name of the user',
    example: 'John Doe',
  })
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    description: 'Mobile phone number',
    example: '017XXXXXXXX',
  })
  @IsString()
  @MaxLength(20)
  mobile: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Strong account password',
    example: 'P@ssw0rd123',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(255)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, {
    message:
      'Password must contain uppercase, lowercase, number, and special character',
  })
  password: string;

  /* =========================
     PROFILE INFO
  ========================== */

  @ApiPropertyOptional({
    description: 'User designation or job title',
    example: 'Software Engineer',
  })
  @IsString()
  @IsOptional()
  designation?: string;

  @ApiPropertyOptional({
    description: 'Short user biography',
    example: 'Passionate full-stack developer',
  })
  @IsString()
  @IsOptional()
  bio?: string;

  @ApiPropertyOptional({
    description: 'Profile image URL',
    example: 'https://example.com/profile.jpg',
  })
  @IsUrl()
  @IsOptional()
  image?: string;

  /* =========================
     LINKS & SOCIAL
  ========================== */

  @ApiPropertyOptional({
    description: 'GitHub profile URL',
    example: 'https://github.com/username',
  })
  @IsUrl()
  @IsOptional()
  github_link?: string;

  @ApiPropertyOptional({
    description: 'Portfolio website URL',
    example: 'https://myportfolio.com',
  })
  @IsUrl()
  @IsOptional()
  portfolio_link?: string;

  @ApiPropertyOptional({
    description: 'Resume Google Drive link',
    example: 'https://drive.google.com/file/d/xxxx',
  })
  @IsUrl()
  @IsOptional()
  resume_drive_link?: string;

  @ApiPropertyOptional({
    description: 'LinkedIn profile URL',
    example: 'https://linkedin.com/in/username',
  })
  @IsUrl()
  @IsOptional()
  linkedin_account_link?: string;

  /* =========================
     SKILLS
  ========================== */

  @ApiPropertyOptional({
    description: 'List of user skills',
    type: [String],
    example: ['HTML', 'CSS', 'UI/UX'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  skills?: string[];

  /* =========================
     META
  ========================== */

  @ApiPropertyOptional({
    description: 'User verification status',
    example: false,
  })
  @IsBoolean()
  @IsOptional()
  is_verified?: boolean;
}

export class UserResponseDto {
  /* =========================
     IDENTIFIERS
  ========================== */

  @ApiProperty({
    description: 'Unique user ID',
    example: 1,
  })
  id: number;

  /* =========================
     BASIC INFO
  ========================== */

  @ApiPropertyOptional({
    description: 'Full name of the user',
    example: 'John Doe',
  })
  name?: string;

  @ApiProperty({
    description: 'Mobile phone number',
    example: '017XXXXXXXX',
  })
  mobile: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john@example.com',
  })
  email: string;

  /* =========================
     PROFILE INFO
  ========================== */

  @ApiPropertyOptional({
    description: 'User designation or job title',
    example: 'Software Engineer',
  })
  designation?: string;

  @ApiPropertyOptional({
    description: 'Short user biography',
    example: 'Passionate full-stack developer',
  })
  bio?: string;

  @ApiPropertyOptional({
    description: 'Profile image URL',
    example: 'https://example.com/profile.jpg',
  })
  image?: string;

  /* =========================
     LINKS & SOCIAL
  ========================== */

  @ApiPropertyOptional({
    description: 'GitHub profile URL',
    example: 'https://github.com/username',
  })
  github_link?: string;

  @ApiPropertyOptional({
    description: 'Portfolio website URL',
    example: 'https://myportfolio.com',
  })
  portfolio_link?: string;

  @ApiPropertyOptional({
    description: 'Resume Google Drive link',
    example: 'https://drive.google.com/file/d/xxxx',
  })
  resume_drive_link?: string;

  @ApiPropertyOptional({
    description: 'LinkedIn profile URL',
    example: 'https://linkedin.com/in/username',
  })
  linkedin_account_link?: string;

  /* =========================
     SKILLS
  ========================== */

  @ApiPropertyOptional({
    description: 'List of user skills',
    type: [String],
    example: ['HTML', 'CSS', 'UI/UX'],
  })
  skills?: string[];

  /* =========================
     ACCOUNT META
  ========================== */

  @ApiProperty({
    description: 'User role',
    example: 'user',
  })
  role: string;

  @ApiProperty({
    description: 'User verification status',
    example: false,
  })
  is_verified: boolean;

  @ApiPropertyOptional({
    description: 'Email verification timestamp',
    example: '2025-01-01T00:00:00.000Z',
  })
  email_verified_at?: Date;

  /* =========================
     TIMESTAMPS
  ========================== */

  @ApiProperty({
    description: 'Account creation timestamp',
    example: '2025-01-01T00:00:00.000Z',
  })
  created_at: Date;

  @ApiProperty({
    description: 'Last account update timestamp',
    example: '2025-01-01T00:00:00.000Z',
  })
  updated_at: Date;
}
