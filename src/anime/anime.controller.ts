import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { AnimeService } from './anime.service';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';

@Controller('animes')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Post()
  create(@Body() createAnimeDto: CreateAnimeDto) {
    return this.animeService.create(createAnimeDto);
  }

  @Get()
  findAll() {
    return this.animeService.findAll();
  }

  /*@Get(':id')
  findOne(@Param('id') id: string) {
    return this.animeService.findOne(+id);
  }*/

  @Patch('/note/:id')
  updateRating(@Param('id', ParseIntPipe) id: number, @Body() updateAnimeDto: UpdateAnimeDto) {
   console.log(id);
   console.log(typeof id);
   
   
    return this.animeService.updateRating(id, updateAnimeDto.nota);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animeService.remove(+id);
  }
}
