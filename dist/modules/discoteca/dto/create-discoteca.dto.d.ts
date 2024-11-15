import { CreateHorarioAtencionDto } from './create-horario-atencion.dto';
import { CreateRedDto } from './create-red.dto';
export declare class CreateDiscotecaDto {
    nombre: string;
    descrip: string;
    url_logo: string;
    url_portada: string;
    direc: string;
    url_maps: string;
    telf: string;
    horariosAtencion: CreateHorarioAtencionDto[];
    redes: CreateRedDto[];
}
