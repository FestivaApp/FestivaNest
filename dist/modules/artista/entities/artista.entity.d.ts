import { ArtistaRedes } from './artista-redes.entity';
import { EventoArtista } from 'src/modules/evento/entities/evento.artista';
export declare class Artista {
    id: number;
    nombre: string;
    tipo: string;
    descrip: string;
    biografia: string;
    tags: string;
    url_foto: string;
    url_foto2: string;
    redes: ArtistaRedes[];
    eventos: EventoArtista[];
}
