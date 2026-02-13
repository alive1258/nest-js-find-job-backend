import { Injectable } from '@nestjs/common';
import { CreateUserCertificationDto } from './dto/create-user-certification.dto';
import { UpdateUserCertificationDto } from './dto/update-user-certification.dto';

@Injectable()
export class UserCertificationsService {
  create(createUserCertificationDto: CreateUserCertificationDto) {
    return 'This action adds a new userCertification';
  }

  findAll() {
    return `This action returns all userCertifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userCertification`;
  }

  update(id: number, updateUserCertificationDto: UpdateUserCertificationDto) {
    return `This action updates a #${id} userCertification`;
  }

  remove(id: number) {
    return `This action removes a #${id} userCertification`;
  }
}
