import { RedesService } from './redes.service';
export declare class RedesController {
    private readonly redesService;
    constructor(redesService: RedesService);
    findAll(): Promise<import("./entities/redes.entity").Redes[]>;
    findOne(id: string): Promise<import("./entities/redes.entity").Redes>;
}
