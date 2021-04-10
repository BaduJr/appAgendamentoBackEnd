import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamentoEntity } from './agendamento.entity';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AgendamentoEntity])],
    providers: [AgendamentoService],
    controllers: [AgendamentoController],
})
export class AgendamentoModule {}
