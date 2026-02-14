import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserExpriencesService } from './user-expriences.service';
import { CreateUserExprienceDto } from './dto/create-user-exprience.dto';
import { UpdateUserExprienceDto } from './dto/update-user-exprience.dto';

@Controller('user-expriences')
export class UserExpriencesController {
  constructor(private readonly userExpriencesService: UserExpriencesService) {}

  @Post()
  create(@Body() createUserExprienceDto: CreateUserExprienceDto) {
    return this.userExpriencesService.create(createUserExprienceDto);
  }

  @Get()
  findAll() {
    return this.userExpriencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userExpriencesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserExprienceDto: UpdateUserExprienceDto) {
    return this.userExpriencesService.update(+id, updateUserExprienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userExpriencesService.remove(+id);
  }
}
