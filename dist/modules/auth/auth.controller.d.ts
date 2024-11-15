import { AuthService } from './auth.service';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';
import { LoginDto } from './dtos/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ correo, clave }: LoginDto): Promise<any>;
    register(dto: CreateUsuarioDto): Promise<import("../usuario/entities/usuario.entity").Usuario>;
    validarSesion(): {
        mensaje: string;
    };
    getPerfil(req: any): Promise<{
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
