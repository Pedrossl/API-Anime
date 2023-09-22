import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeController } from './anime.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anime } from './entities/anime.entity';
import { Genero } from 'src/genero/entities/genero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Anime, Genero])],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AnimeModule {}
