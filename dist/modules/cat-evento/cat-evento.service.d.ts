import { CreateCatEventoDto } from './dto/create-cat-evento.dto';
import { UpdateCatEventoDto } from './dto/update-cat-evento.dto';
import { Repository } from 'typeorm';
import { CatEvento } from './entities/cat-evento.entity';
export declare class CatEventoService {
    private readonly repo;
    constructor(repo: Repository<CatEvento>);
    create(createCatEventoDto: CreateCatEventoDto): Promise<CatEvento>;
    findAll(): Promise<CatEvento[]>;
    findOne(id: number): Promise<CatEvento>;
    update(id: number, updateCatEventoDto: UpdateCatEventoDto): Promise<CatEvento>;
    remove(id: number): Promise<void>;
}
