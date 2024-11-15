import { ArtistaRedes } from "src/modules/artista/entities/artista-redes.entity";
import { DiscotecaRedes } from "src/modules/discoteca/entities/discoteca-redes.entity";
export declare class Redes {
    id: number;
    nombre: string;
    cod: string;
    logo: string;
    discotecaRedes: DiscotecaRedes[];
    artistaRedes: ArtistaRedes[];
}
