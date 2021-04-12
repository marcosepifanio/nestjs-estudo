import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 500 })
    nome: string;
  
    @Column('text')
    email: string;

    @Column('int')
    idade: number;
}
