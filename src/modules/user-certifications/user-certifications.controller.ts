import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCertificationsService } from './user-certifications.service';
import { CreateUserCertificationDto } from './dto/create-user-certification.dto';
import { UpdateUserCertificationDto } from './dto/update-user-certification.dto';

@Controller('user-certifications')
export class UserCertificationsController {
  constructor(private readonly userCertificationsService: UserCertificationsService) {}

  @Post()
  create(@Body() createUserCertificationDto: CreateUserCertificationDto) {
    return this.userCertificationsService.create(createUserCertificationDto);
  }

  @Get()
  findAll() {
    return this.userCertificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCertificationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserCertificationDto: UpdateUserCertificationDto) {
    return this.userCertificationsService.update(+id, updateUserCertificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCertificationsService.remove(+id);
  }
}
