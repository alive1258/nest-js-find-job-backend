import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
  UseInterceptors,
  Req,
  UploadedFile,
  ParseUUIDPipe,
} from '@nestjs/common';
import { TrustedByCompaniesService } from './trusted-by-companies.service';
import { CreateTrustedByCompanyDto } from './dto/create-trusted-by-company.dto';
import { UpdateTrustedByCompanyDto } from './dto/update-trusted-by-company.dto';
import { ApiDoc } from 'src/auth/decorators/swagger.decorator';
import { RequirePermissions } from 'src/auth/decorators/permissions.decorator';
import { Permission } from 'src/auth/enums/permission-type.enum';
import { JwtOrApiKeyGuard } from 'src/auth/guards/jwt-or-api-key.guard';
import { PermissionsGuard } from 'src/auth/guards/permissions.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { Throttle } from '@nestjs/throttler';
import type { Request } from 'express';

@Controller('trusted-by-companies')
export class TrustedByCompaniesController {
  constructor(
    private readonly trustedByCompaniesService: TrustedByCompaniesService,
  ) {}

  @ApiDoc({
    summary: 'Create Trusted Company',
    description: 'Creates a new trusted company. Requires proper permission.',
    status: HttpStatus.OK,
  })
  @RequirePermissions(Permission.TRUSTED_COMPANIES_CREATE)
  @UseGuards(JwtOrApiKeyGuard, PermissionsGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Throttle({ default: { limit: 20, ttl: 180 } })
  @Post('create')
  create(
    @Req() req: Request,
    @Body() createTrustedByCompanyDto: CreateTrustedByCompanyDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.trustedByCompaniesService.create(
      req,
      createTrustedByCompanyDto,
      file,
    );
  }

  @ApiDoc({
    summary: 'Get all Trusted Companies',
    description:
      'Retrieve all trusted companies. Supports pagination and filters.',
    status: HttpStatus.OK,
  })
  @Get()
  findAll() {
    return this.trustedByCompaniesService.findAll();
  }

  @ApiDoc({
    summary: 'Get single Trusted Company',
    description: 'Retrieve a single trusted company by UUID.',
    status: HttpStatus.OK,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trustedByCompaniesService.findOne(id);
  }

  @ApiDoc({
    summary: 'Update Trusted Company',
    description:
      'Updates an existing trusted company. Requires proper permission.',
    status: HttpStatus.OK,
  })
  @RequirePermissions(Permission.TRUSTED_COMPANIES_UPDATE)
  @UseGuards(JwtOrApiKeyGuard, PermissionsGuard)
  @UseInterceptors(FileInterceptor('logo'))
  @Throttle({ default: { limit: 20, ttl: 180 } })
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDto: UpdateTrustedByCompanyDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.trustedByCompaniesService.update(id, updateDto, file);
  }

  @ApiDoc({
    summary: 'Delete Trusted Company',
    description: 'Soft deletes a trusted company. Requires proper permission.',
    status: HttpStatus.OK,
  })
  @RequirePermissions(Permission.TRUSTED_COMPANIES_DELETE)
  @UseGuards(JwtOrApiKeyGuard, PermissionsGuard)
  @Throttle({ default: { limit: 20, ttl: 180 } })
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.trustedByCompaniesService.remove(id);
  }
}
