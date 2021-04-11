import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblusuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  login: string;

  @Column()
  senha: string;

  @Column()
  papel: number;
}