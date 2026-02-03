import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateTrustedByCompanyDto } from './dto/create-trusted-by-company.dto';
import { UpdateTrustedByCompanyDto } from './dto/update-trusted-by-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TrustedByCompany } from './entities/trusted-by-company.entity';
import { Repository } from 'typeorm';
import { FileUploadsService } from 'src/common/file-uploads/file-uploads.service';
import { DataQueryService } from 'src/common/data-query/data-query.service';
import { Request } from 'express';
import { Service } from '../services/entities/service.entity';

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
