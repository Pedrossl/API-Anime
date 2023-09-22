import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneroDto } from './create-genero.dto';
import { IsInt } from 'class-validator';

export class UpdateGeneroDto extends PartialType(CreateGeneroDto) {
  @IsInt()
  id: number;
}
