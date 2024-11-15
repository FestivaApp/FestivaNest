import { Repository } from 'typeorm';
import { Redes } from './entities/redes.entity';
export declare class RedesService {
    private readonly repo;
    constructor(repo: Repository<Redes>);
    findAll(): Promise<Redes[]>;
    findOne(id: number): Promise<Redes>;
}
