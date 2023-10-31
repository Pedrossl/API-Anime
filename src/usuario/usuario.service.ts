import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
constructor(
  @InjectRepository(Usuario)
  private usuarioRepository: Repository<Usuario>,
){}
  async criarUsuario(createUsuarioDto: CreateUsuarioDto) {
    const usuario = await this.usuarioRepository.save(createUsuarioDto);
    return usuario;
  }

  findAll() {
    const usuarios = this.usuarioRepository.find();
    return usuarios;

  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
