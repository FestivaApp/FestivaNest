import { TipoUser } from './tipo-user.entity';
export declare class Usuario {
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
    tipoUser: TipoUser;
}
