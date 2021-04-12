import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';

import { UsuariosService } from './usuarios.service';
import { UsuariosDTO } from './usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private usuarioService: UsuariosService) {}

    @Post()
    async criarUsuario(@Body() data: UsuariosDTO) {
        return {
            statusCode: HttpStatus.OK,
            message: 'Usuário adicionado com sucesso',
            data: await this.usuarioService.salvar(data),
        };
    }

    @Get('/obterUsuarioPorLoginESenha/:login/:senha')
    async obterUsuarioPorLoginESenha(@Param('login') login: string, @Param('senha') senha: string) {
        return await this.usuarioService.obterUsuarioPorLoginESenha(login, senha);
    }

    @Get()
    async obterListaProfessores(): Promise<UsuariosDTO[]>{
        return await this.usuarioService.obterListaProfessores();
    }
}