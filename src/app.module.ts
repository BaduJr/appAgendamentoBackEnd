import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AgendamentoModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}