import { Min } from '@nestjs/class-validator';
import { IsInt, IsString, Max } from 'class-validator';

export class CreateAnimeDto {
  @IsString()
  titulo: string;

  @IsString()
  produtora: string;

  @IsInt()
  temporadas: number;

  @IsInt()
  episodios: number;

  @IsInt()
  @Min(1)
  @Max(5)
  nota: number;

  @IsInt()
  genero_id: number;
}
