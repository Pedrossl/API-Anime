import { Injectable } from '@nestjs/common';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { Anime } from './entities/anime.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genero } from 'src/genero/entities/genero.entity';

@Injectable()
export class AnimeService {
  constructor(
    @InjectRepository(Anime)
    private animeRepository: Repository<Anime>,
    @InjectRepository(Genero)
    private generoRepository: Repository<Genero>,
  ) {}
  async create(createAnimeDto: CreateAnimeDto) {
    const existeGenero = await this.generoRepository.findOne({
      where: { id: createAnimeDto.genero_id },
    });
    if (!existeGenero) {
      return 'not found';
    }
    const anime = this.animeRepository.create(createAnimeDto);
    anime.genero = existeGenero;
    return await this.animeRepository.save(anime);
  }

  findAll() {
    return this.animeRepository
      .createQueryBuilder('anime')
      .leftJoinAndSelect('anime.genero', 'genero')
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} anime`;
  }

  update(id: number, updateAnimeDto: UpdateAnimeDto) {
    return `This action updates a #${id} anime`;
  }

  remove(id: number) {
    return `This action removes a #${id} anime`;
  }
}
