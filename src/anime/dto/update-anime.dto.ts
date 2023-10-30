import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimeDto } from './create-anime.dto';
import { IsInt } from 'class-validator';

export class UpdateAnimeDto extends PartialType(CreateAnimeDto) {

}
