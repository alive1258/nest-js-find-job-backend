import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserEducationsService } from './user-educations.service';
import { CreateUserEducationDto } from './dto/create-user-education.dto';
import { UpdateUserEducationDto } from './dto/update-user-education.dto';

@Controller('user-educations')
export class UserEducationsController {
  constructor(private readonly userEducationsService: UserEducationsService) {}

  @Post()
  create(@Body() createUserEducationDto: CreateUserEducationDto) {
    return this.userEducationsService.create(createUserEducationDto);
  }

  @Get()
  findAll() {
    return this.userEducationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userEducationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserEducationDto: UpdateUserEducationDto) {
    return this.userEducationsService.update(+id, updateUserEducationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userEducationsService.remove(+id);
  }
}
