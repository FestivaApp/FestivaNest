import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Repository } from 'typeorm';
import { Evento } from './entities/evento.entity';
import { CatEventoService } from '../cat-evento/cat-evento.service';
import { DiscotecaService } from '../discoteca/discoteca.service';
import { ArtistaService } from '../artista/artista.service';
import { EventoArtista } from './entities/evento.artista';
export declare class EventoService {
    private readonly repo;
    private readonly repoEventoArtista;
    private readonly categoriaService;
    private readonly discotecaService;
    private readonly artistaService;
    constructor(repo: Repository<Evento>, repoEventoArtista: Repository<EventoArtista>, categoriaService: CatEventoService, discotecaService: DiscotecaService, artistaService: ArtistaService);
    create(createEventoDto: CreateEventoDto): Promise<Evento>;
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
    findAllPlane(): Promise<{
        categoria: string;
        eventoArtistas: import("../artista/entities/artista.entity").Artista[];
        id: number;
        titulo: string;
        descrip: string;
        url_foto: string;
        fecha: Date;
        hora: string;
        createdAt: Date;
        discoteca: import("../discoteca/entities/discoteca.entity").Discoteca;
    }[]>;
    findOne(id: number): Promise<Evento>;
    update(id: number, updateEventoDto: UpdateEventoDto): string;
    remove(id: number): string;
}
