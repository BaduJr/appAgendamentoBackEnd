import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AgendamentoEntity } from './agendamento.entity';
import { AgendamentoDTO } from './agendamento.dto';

@Injectable()
export class AgendamentoService {
    constructor(
        @InjectRepository(AgendamentoEntity)
        private agendamentoRepository: Repository<AgendamentoEntity>,
    ) {}
    
    async obterTodos() {
        return await this.agendamentoRepository.find();
    }

    async salvar(data: AgendamentoDTO) {
        const user = this.agendamentoRepository.create(data);
        await this.agendamentoRepository.save(data);
        return user;
    }
}