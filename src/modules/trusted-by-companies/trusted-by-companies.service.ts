import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateTrustedByCompanyDto } from './dto/create-trusted-by-company.dto';
import { UpdateTrustedByCompanyDto } from './dto/update-trusted-by-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TrustedByCompany } from './entities/trusted-by-company.entity';
import { Not, Repository } from 'typeorm';
import { FileUploadsService } from 'src/common/file-uploads/file-uploads.service';
import { DataQueryService } from 'src/common/data-query/data-query.service';
import { Request } from 'express';
import { Service } from '../services/entities/service.entity';
import { IPagination } from 'src/common/data-query/pagination.interface';

@Injectable()
export class TrustedByCompaniesService {
  constructor(
    @InjectRepository(TrustedByCompany)
    private readonly repository: Repository<TrustedByCompany>,
    private readonly fileUploadsService: FileUploadsService,
    private readonly dataQueryService: DataQueryService,
  ) {}
  async create(
    req: Request,
    createTrustedByCompanyDto: CreateTrustedByCompanyDto,
    file?: Express.Multer.File,
  ): Promise<TrustedByCompany> {
    const userId = req?.user?.sub;
    if (!userId)
      throw new UnauthorizedException(
        'You must be logged in to create a company.',
      );

    createTrustedByCompanyDto.name = createTrustedByCompanyDto.name.trim();

    const exists = await this.repository.exists({
      where: { name: createTrustedByCompanyDto.name },
    });
    if (exists)
      throw new UnauthorizedException(
        'Trusted company with this name already exists.',
      );

    let imageUrl: string | undefined;
    if (file) {
      try {
        const uploadedFiles = await this.fileUploadsService.fileUploads([file]);
        imageUrl = uploadedFiles[0];
      } catch (error) {
        throw new UnauthorizedException('Failed to upload image.');
      }
    }

    const newCompany = this.repository.create({
      ...createTrustedByCompanyDto,
      added_by: String(userId),
      image: imageUrl,
    });

    try {
      return await this.repository.save(newCompany);
    } catch (err) {
      throw new BadRequestException(
        'Failed to create company. Please try again.',
      );
    }
  }

  async findAll(query?: any): Promise<IPagination<TrustedByCompany>> {
    return this.dataQueryService.execute<TrustedByCompany>({
      repository: this.repository,
      alias: 'company',
      pagination: query,
      searchableFields: ['name'],
      filterableFields: [],
      select: ['id', 'name', 'created_at', 'updated_at'],
    });
  }

  async findOne(id: string): Promise<TrustedByCompany> {
    const company = await this.repository.findOne({ where: { id } });

    if (!company) throw new NotFoundException('Trusted company not found.');

    return company;
  }

  async update(
    id: string,
    updateDto: UpdateTrustedByCompanyDto,
    file?: Express.Multer.File,
  ): Promise<TrustedByCompany> {
    const company = await this.findOne(id);

    if (updateDto.name) {
      updateDto.name = updateDto.name.trim();
      const exists = await this.repository.exists({
        where: { name: updateDto.name, id: Not(id) },
      });
      if (exists) throw new BadRequestException('Company name already exists.');
    }

    // Handle optional logo update
    if (file) {
      if (company.image) {
        const updatedLogo = await this.fileUploadsService.updateFileUploads({
          oldFile: company.image,
          currentFile: file,
        });
        updateDto.image = updatedLogo as string;
      } else {
        const uploadedFiles = await this.fileUploadsService.fileUploads([file]);
        updateDto.image = uploadedFiles[0];
      }
    }

    Object.assign(company, updateDto);
    return this.repository.save(company);
  }

  async remove(id: string): Promise<void> {
    const company = await this.findOne(id);

    // Delete logo if exists
    if (company.image) {
      try {
        await this.fileUploadsService.deleteFileUploads(company.image);
      } catch (err) {
        console.warn(`Failed to delete company image: ${err.message}`);
      }
    }

    const result = await this.repository.softDelete(id);
    if (!result.affected) {
      throw new BadRequestException(
        'Delete failed: record might already be removed.',
      );
    }
  }
}
