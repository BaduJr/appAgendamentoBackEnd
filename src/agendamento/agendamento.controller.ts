import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';

import { AgendamentoService } from './agendamento.service';
import { AgendamentoDTO } from './agendamento.dto';

@Controller('agendamento')
export class AgendamentoController {
    constructor(private agendamentoService: AgendamentoService) {}

  @Get(':idusuario')
  async obterTodos(@Param('idusuario') idusuario: string) {
    return await this.agendamentoService.obterTodos(idusuario);
  }

  @Post()
  async criarAgendamento(@Body() data: AgendamentoDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Agendamento salvo com sucesso',
      data: await this.agendamentoService.salvar(data),
    };
  }
}