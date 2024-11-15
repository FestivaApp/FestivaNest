import { Discoteca } from './discoteca.entity';
export declare class HorarioAtencion {
    id: number;
    dia: number;
    hora_inicio: string;
    hora_fin: string;
    discoteca: Discoteca;
}
