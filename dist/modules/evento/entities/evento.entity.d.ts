import { Discoteca } from 'src/modules/discoteca/entities/discoteca.entity';
import { CatEvento } from 'src/modules/cat-evento/entities/cat-evento.entity';
import { EventoArtista } from './evento.artista';
export declare class Evento {
    id: number;
    titulo: string;
    descrip: string;
    url_foto: string;
    fecha: Date;
    hora: string;
    createdAt: Date;
    categoria: CatEvento;
    discoteca: Discoteca;
    eventoArtistas: EventoArtista[];
}
