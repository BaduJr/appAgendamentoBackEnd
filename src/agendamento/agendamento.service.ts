import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AgendamentoEntity } from './agendamento.entity';
import { AgendamentoDTO } from './agendamento.dto';
import { UsuarioEntity } from '../usuarios/usuarios.entity';

@Injectable()
export class AgendamentoService {
    constructor(
        @InjectRepository(AgendamentoEntity)
        private agendamentoRepository: Repository<AgendamentoEntity>
    ) {}
    
    async obterTodos(): Promise<AgendamentoEntity[]> {
       return await this.agendamentoRepository.createQueryBuilder("agendamento")
        .innerJoinAndSelect(UsuarioEntity, "aluno", "aluno.id = agendamento.aluno")
        .innerJoinAndSelect(UsuarioEntity, "professor", "professor.id = agendamento.professor")
        .select(['agendamento.id', 'agendamento.data', 'aluno.nome', 'professor.nome']) // added selection
        //.where("user.name = :name", { name: "Timber" })
        .orderBy('agendamento.data')
        .getRawMany();
    }

    async salvar(data: AgendamentoDTO) {
        const user = this.agendamentoRepository.create(data);
        await this.agendamentoRepository.save(data);
        return user;
    }
}