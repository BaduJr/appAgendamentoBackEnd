import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblagendamento')
export class AgendamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @Column()
  aluno: number;

  @Column()
  professor: number;
}