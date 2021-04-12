import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
    @Inject('USUARIO_REPOSITORY2')
    private usuarioRepository2: Repository<Usuario>,
  ) { }

  create(createUsuarioDto: CreateUsuarioDto) {
    
    const { email, idade, nome } = createUsuarioDto;
    let usuario = new Usuario();
    usuario.email = email;
    usuario.idade = idade;
    usuario.nome = nome;
    return this.usuarioRepository2.save(usuario)
      .then(() => `usuario added`)
      .catch(() => 'Error when updates usuario');
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository2.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    let usuario = new Usuario();
    usuario.id = id;
    const { email, idade, nome } = updateUsuarioDto;
    usuario.email = email;
    usuario.idade = idade;
    usuario.nome = nome;
    return this.usuarioRepository2.save(usuario)
      .then(() => `This action updates a #${id} usuario`)
      .catch(() => 'Error when updates usuario');
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
