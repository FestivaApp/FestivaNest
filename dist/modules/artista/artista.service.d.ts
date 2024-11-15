import { CreateArtistaDto } from './dto/create-artista.dto';
import { UpdateArtistaDto } from './dto/update-artista.dto';
import { Repository } from 'typeorm';
import { Artista } from './entities/artista.entity';
import { RedesService } from '../redes/redes.service';
import { ArtistaRedes } from './entities/artista-redes.entity';
export declare class ArtistaService {
    private readonly repo;
    private readonly repoArtistaRedes;
    private readonly redesService;
    constructor(repo: Repository<Artista>, repoArtistaRedes: Repository<ArtistaRedes>, redesService: RedesService);
    create(dto: CreateArtistaDto): Promise<Artista>;
    findAll(): Promise<Artista[]>;
    findOne(id: number): Promise<Artista>;
    update(id: number, dto: UpdateArtistaDto): Promise<Artista>;
    remove(id: number): Promise<{
        message: string;
    }>;
    removeAll(): Promise<{
        message: string;
    }>;
}
