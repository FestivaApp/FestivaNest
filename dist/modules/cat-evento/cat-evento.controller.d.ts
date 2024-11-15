import { CatEventoService } from './cat-evento.service';
import { CreateCatEventoDto } from './dto/create-cat-evento.dto';
import { UpdateCatEventoDto } from './dto/update-cat-evento.dto';
export declare class CatEventoController {
    private readonly catEventoService;
    constructor(catEventoService: CatEventoService);
    create(createCatEventoDto: CreateCatEventoDto): Promise<import("./entities/cat-evento.entity").CatEvento>;
    findAll(): Promise<import("./entities/cat-evento.entity").CatEvento[]>;
    findOne(id: string): Promise<import("./entities/cat-evento.entity").CatEvento>;
    update(id: string, updateCatEventoDto: UpdateCatEventoDto): Promise<import("./entities/cat-evento.entity").CatEvento>;
    remove(id: string): Promise<void>;
}
