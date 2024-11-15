import { ArtistaService } from './artista.service';
import { CreateArtistaDto } from './dto/create-artista.dto';
import { UpdateArtistaDto } from './dto/update-artista.dto';
export declare class ArtistaController {
    private readonly artistaService;
    constructor(artistaService: ArtistaService);
    create(createArtistaDto: CreateArtistaDto): Promise<import("./entities/artista.entity").Artista>;
    findAll(): Promise<import("./entities/artista.entity").Artista[]>;
    findOne(id: string): Promise<import("./entities/artista.entity").Artista>;
    update(id: string, updateArtistaDto: UpdateArtistaDto): Promise<import("./entities/artista.entity").Artista>;
    removeAll(): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    uploadFile(file: Express.Multer.File): string;
}
