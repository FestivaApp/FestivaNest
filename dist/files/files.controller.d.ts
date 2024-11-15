import { FilesService } from './files.service';
import { Response } from 'express';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    getArtistaImage(res: Response, imageName: string): void;
    uploadArtistaImage(file: Express.Multer.File): {
        secureUrl: string;
        fileName: string;
    };
}
