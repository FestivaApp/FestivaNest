import { DiscotecaService } from './discoteca.service';
import { CreateDiscotecaDto } from './dto/create-discoteca.dto';
import { UpdateDiscotecaDto } from './dto/update-discoteca.dto';
export declare class DiscotecaController {
    private readonly discotecaService;
    constructor(discotecaService: DiscotecaService);
    create(createDiscotecaDto: CreateDiscotecaDto): Promise<import("./entities/discoteca.entity").Discoteca>;
    findAll(): Promise<{
        discotecaRedes: {
            url: string;
            red: string;
            cod: string;
            logo: string;
        }[];
        id: number;
        nombre: string;
        descrip: string;
        url_logo: string;
        url_portada: string;
        direc: string;
        url_maps: string;
        telf: string;
        horariosAtencion: import("./entities/horario-atencion.entity").HorarioAtencion[];
        eventos: import("../evento/entities/evento.entity").Evento[];
    }[]>;
    search(term: string): Promise<import("./entities/discoteca.entity").Discoteca[]>;
    findOne(id: number): Promise<{
        discotecaRedes: {
            url: string;
            red: string;
            cod: string;
            logo: string;
        }[];
        id: number;
        nombre: string;
        descrip: string;
        url_logo: string;
        url_portada: string;
        direc: string;
        url_maps: string;
        telf: string;
        horariosAtencion: import("./entities/horario-atencion.entity").HorarioAtencion[];
        eventos: import("../evento/entities/evento.entity").Evento[];
    }>;
    update(id: string, updateDiscotecaDto: UpdateDiscotecaDto): Promise<import("./entities/discoteca.entity").Discoteca>;
    remove(id: string): Promise<void>;
}
