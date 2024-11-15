import { DiscotecaRedes } from './discoteca-redes.entity';
import { HorarioAtencion } from './horario-atencion.entity';
import { Evento } from 'src/modules/evento/entities/evento.entity';
export declare class Discoteca {
    id: number;
    nombre: string;
    descrip: string;
    url_logo: string;
    url_portada: string;
    direc: string;
    url_maps: string;
    telf: string;
    discotecaRedes: DiscotecaRedes[];
    horariosAtencion: HorarioAtencion[];
    eventos: Evento[];
}
