import { IsString } from 'class-validator';

export class CreateGeneroDto {
  @IsString()
  nome: string;
}
