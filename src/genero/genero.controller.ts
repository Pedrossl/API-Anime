import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Controller('genero')
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Post()
  async create(@Body() createGeneroDto: CreateGeneroDto) {
    return await this.generoService.create(createGeneroDto);
  }

  @Get()
  async findAll() {
    return await this.generoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.generoService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGeneroDto: UpdateGeneroDto,
  ) {
    return await this.generoService.update(+id, updateGeneroDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.generoService.remove(+id);
  }
}
