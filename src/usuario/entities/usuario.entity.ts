import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({length: 50})
    nome: string

    @Column({length: 50, unique: true})
    email: string

    @Column({length: 500})
    senha: string

    @Column({default: false})
    admin: boolean
}

