import { Injectable } from '@nestjs/common';
import { CreateUserExprienceDto } from './dto/create-user-exprience.dto';
import { UpdateUserExprienceDto } from './dto/update-user-exprience.dto';

@Injectable()
export class UserExpriencesService {
  create(createUserExprienceDto: CreateUserExprienceDto) {
    return 'This action adds a new userExprience';
  }

  findAll() {
    return `This action returns all userExpriences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userExprience`;
  }

  update(id: number, updateUserExprienceDto: UpdateUserExprienceDto) {
    return `This action updates a #${id} userExprience`;
  }

  remove(id: number) {
    return `This action removes a #${id} userExprience`;
  }
}
