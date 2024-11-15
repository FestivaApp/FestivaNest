import { Evento } from './evento.entity';
import { Artista } from 'src/modules/artista/entities/artista.entity';
export declare class EventoArtista {
    id: number;
    evento: Evento;
    artista: Artista;
}
