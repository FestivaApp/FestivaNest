import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
export declare class UsuarioService {
    private readonly repo;
    constructor(repo: Repository<Usuario>);
    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOneById(id: number): Promise<Usuario>;
    findOne(correo: string): Promise<Usuario>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): string;
    remove(id: number): string;
}
