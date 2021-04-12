import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsuarioEntity } from './usuarios.entity';
import { UsuariosDTO } from './usuarios.dto';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private usuarioRepository: Repository<UsuarioEntity>,
    ) {}
    
    async obterListaProfessores(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.createQueryBuilder('u')
        .select(["u.id", "u.nome"])
        .where('u.papel = 2')
        .getMany();
    }

    async obterUsuarioPorLoginESenha(login: string, senha: string): Promise<UsuarioEntity> {
        return await this.usuarioRepository.findOne(
            {
                where: {
                    login: login,
                    senha: senha
                },
            }
        );
    }

    async salvar(data: UsuariosDTO) {
        const user = this.usuarioRepository.create(data);
        await this.usuarioRepository.save(data);
        return user;
    }
}