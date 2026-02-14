import { Injectable } from '@nestjs/common';
import { CreateUserEducationDto } from './dto/create-user-education.dto';
import { UpdateUserEducationDto } from './dto/update-user-education.dto';

@Injectable()
export class UserEducationsService {
  create(createUserEducationDto: CreateUserEducationDto) {
    return 'This action adds a new userEducation';
  }

  findAll() {
    return `This action returns all userEducations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userEducation`;
  }

  update(id: number, updateUserEducationDto: UpdateUserEducationDto) {
    return `This action updates a #${id} userEducation`;
  }

  remove(id: number) {
    return `This action removes a #${id} userEducation`;
  }
}
