import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero)
    private generoRepository: Repository<Genero>,
  ) {}

  async create(createGeneroDto: CreateGeneroDto) {
    return await this.generoRepository.save(createGeneroDto);
  }

  async findAll() {
    return await this.generoRepository.find();
  }

  async findOne(id: number) {
    return await this.generoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateGeneroDto: UpdateGeneroDto) {
    const genero = await this.generoRepository.findOne({ where: { id } });
    if (!genero) {
      return 'not found';
    }

    try {
      await this.generoRepository.update({ id }, updateGeneroDto);
    } catch (error) {
      return { msg: 'Not Found', error };
    }

    return await this.generoRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const genero = await this.generoRepository.findOne({ where: { id } });
    if (!genero) {
      return 'not found';
    }

    try {
      await this.generoRepository.delete({ id });
    } catch (error) {
      return { msg: 'Not Found', error };
    }
  }
}
