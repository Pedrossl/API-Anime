import { Genero } from 'src/genero/entities/genero.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Anime {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  titulo: string;

  @Column()
  produtora: string;

  @Column()
  temporadas: number;

  @Column()
  episodios: number;

  @Column()
  nota: number;

  @ManyToOne(() => Genero, (genero) => genero.animes)
  @JoinTable()
  genero: Genero;
}
