import { PartialType } from '@nestjs/swagger';
import { CreateUserExprienceDto } from './create-user-exprience.dto';

export class UpdateUserExprienceDto extends PartialType(CreateUserExprienceDto) {}
