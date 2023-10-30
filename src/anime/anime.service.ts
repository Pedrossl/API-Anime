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



async updateRating(id: number, nota: number) : Promise<Anime> {
const anime = await this.animeRepository.findOne({ where: { id } });
console.log(anime)

  
return this.animeRepository.save({ ...anime, nota});
}

  async remove(id: number) {
    const anime = await this.animeRepository.findOne({ where: { id } });
    if (!anime) {
      return 'not found';
    }

    try {
      await this.animeRepository.delete({ id });
    } catch (error) {
      return { msg: 'Not Found', error };
    }
    return { msg: 'Deleted', id };
  }
}
