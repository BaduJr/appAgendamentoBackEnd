import { UsuarioEntity } from 'src/usuarios/usuarios.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity('tblagendamento')
export class AgendamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  //@ManyToMany(type => UsuarioEntity)
  //@JoinTable()
  @Column()
  aluno: number;

  @Column()
  professor: number;
}