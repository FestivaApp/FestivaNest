import { UsuarioService } from '../usuario/usuario.service';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private readonly jwt;
    constructor(usersService: UsuarioService, jwt: JwtService);
    validateUser(correo: string, pass: string): Promise<any>;
    hashPassword(password: string): Promise<string>;
    register({ clave, ...dto }: CreateUsuarioDto): Promise<import("../usuario/entities/usuario.entity").Usuario>;
    getPerfil(id: number): Promise<{
        tipoUser: string;
        id: number;
        nombre: string;
        apellidos: string;
        correo: string;
        clave: string;
        fecha_nac: Date;
        telf: string;
        url?: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
