import { Anime } from 'src/anime/entities/anime.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genero {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Anime, (anime) => anime.genero)
  animes: Anime[];
}
