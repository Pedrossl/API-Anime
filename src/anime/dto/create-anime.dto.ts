import { IsInt, IsString } from 'class-validator';

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
  nota: number;

  @IsInt()
  genero_id: number;
}
