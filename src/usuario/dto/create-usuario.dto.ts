import { IsBoolean, IsEmail, IsString } from "class-validator";


export class CreateUsuarioDto {
    
    @IsString()
    nome: string

    @IsString()
    @IsEmail()
    email: string

    @IsString()
    senha: string

    @IsBoolean()
    admin: boolean
}
