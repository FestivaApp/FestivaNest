export declare class CreateArtistaDto {
    nombre: string;
    tipo: string;
    descrip: string;
    biografia: string;
    tags: string;
    url_foto: string;
    url_foto2: string;
    redes: CreateRedDto[];
}
declare class CreateRedDto {
    id_red: number;
    url: string;
}
export {};
