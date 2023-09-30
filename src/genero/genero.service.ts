import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
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

  async update(id: number, createGeneroDto: CreateGeneroDto) {
    const genero = await this.generoRepository.findOne({ where: { id } });
    if (!genero) {
      return 'not found';
    }

    try {
      await this.generoRepository.update({ id }, createGeneroDto);
    } catch (error) {
      return { msg: 'Not Found', error };
    }

    return await this.generoRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const genero = await this.generoRepository.findOne({ where: { id } });
    if (!genero) {
      return { msg: 'Genero not found' };
    }

    try {
      await this.generoRepository.delete({ id });
    } catch (error) {
      return { msg: `Can't delete this genre, as it's being used`, error };
    }
    return { msg: 'Deleted', id };
  }
}
