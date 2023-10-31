import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService,
      @InjectRepository(Usuario)
      private usuarioRepository: Repository<Usuario>,
    ) {}

  @Post()
  async create(@Body() body: CreateUsuarioDto) {
    
    try{
      const seila = await this.usuarioRepository
      .createQueryBuilder('usuario')
      .where('usuario.email = :email', {email: body.email})
      .getOne();

      if(seila){
        return {message: 'Email já cadastrado'};
      }
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      console.log(body.senha);
      const senhaCriptografada = bcrypt.hashSync(body.senha, salt);
      console.log(senhaCriptografada);
      
      
      

      const usuario = await this.usuarioRepository.save({
        nome: body.nome,
        email: body.email,
        senha: senhaCriptografada,
        admin: false,
      });

      return usuario;



    }catch(e){
      console.log(e);
    } 
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
