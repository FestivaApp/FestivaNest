import { CreateDiscotecaDto } from './dto/create-discoteca.dto';
import { UpdateDiscotecaDto } from './dto/update-discoteca.dto';
import { DataSource, Repository } from 'typeorm';
import { Discoteca } from './entities/discoteca.entity';
import { DiscotecaRedes } from './entities/discoteca-redes.entity';
import { RedesService } from '../redes/redes.service';
import { HorarioAtencion } from './entities/horario-atencion.entity';
import { Evento } from '../evento/entities/evento.entity';
export declare class DiscotecaService {
    private readonly repo;
    private readonly repoDiscotecaRedes;
    private readonly repoHorarioAtencion;
    private readonly redesService;
    private readonly dataSource;
    constructor(repo: Repository<Discoteca>, repoDiscotecaRedes: Repository<DiscotecaRedes>, repoHorarioAtencion: Repository<HorarioAtencion>, redesService: RedesService, dataSource: DataSource);
    create(createDiscotecaDto: CreateDiscotecaDto): Promise<Discoteca>;
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
        horariosAtencion: HorarioAtencion[];
        eventos: Evento[];
    }[]>;
    findOne(id: number): Promise<Discoteca>;
    findOnePlane(id: number): Promise<{
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
        horariosAtencion: HorarioAtencion[];
        eventos: Evento[];
    }>;
    search(term: string): Promise<Discoteca[]>;
    update(id: number, updateDiscotecaDto: UpdateDiscotecaDto): Promise<Discoteca>;
    remove(id: number): Promise<void>;
    findOneByFilter(nombre: string, params: any): Promise<void>;
}
