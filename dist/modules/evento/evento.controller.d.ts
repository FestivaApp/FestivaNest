import { EventoService } from './evento.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
export declare class EventoController {
    private readonly eventoService;
    constructor(eventoService: EventoService);
    create(createEventoDto: CreateEventoDto): Promise<import("./entities/evento.entity").Evento>;
    findAll(): Promise<{
        eventoArtistas: import("../artista/entities/artista.entity").Artista[];
        id: number;
        titulo: string;
        descrip: string;
        url_foto: string;
        fecha: Date;
        hora: string;
        createdAt: Date;
        categoria: import("../cat-evento/entities/cat-evento.entity").CatEvento;
        discoteca: import("../discoteca/entities/discoteca.entity").Discoteca;
    }[]>;
    findOne(id: string): Promise<import("./entities/evento.entity").Evento>;
    update(id: string, updateEventoDto: UpdateEventoDto): string;
    remove(id: string): string;
}
