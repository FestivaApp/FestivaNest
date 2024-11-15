"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const artista_entity_1 = require("./entities/artista.entity");
const typeorm_2 = require("@nestjs/typeorm");
const redes_service_1 = require("../redes/redes.service");
const artista_redes_entity_1 = require("./entities/artista-redes.entity");
let ArtistaService = class ArtistaService {
    constructor(repo, repoArtistaRedes, redesService) {
        this.repo = repo;
        this.repoArtistaRedes = repoArtistaRedes;
        this.redesService = redesService;
    }
    async create(dto) {
        const redes = await Promise.all(dto.redes.map(async (element) => {
            const red = await this.redesService.findOne(element.id_red);
            if (!red) {
                throw new common_1.NotFoundException(`Red con ID ${element.id_red} no encontrada`);
            }
            return red;
        }));
        const artista = this.repo.create(dto);
        await this.repo.save(artista);
        const artistaRedesPromises = dto.redes.map((element, index) => {
            const artistaRedes = this.repoArtistaRedes.create({
                artista: artista,
                red: redes[index],
                url: element.url,
            });
            return this.repoArtistaRedes.save(artistaRedes);
        });
        await Promise.all(artistaRedesPromises);
        return this.findOne(artista.id);
    }
    async findAll() {
        return await this.repo.find({
            relations: ['redes'],
        });
    }
    async findOne(id) {
        const artista = await this.repo.findOne({
            where: { id },
            relations: ['redes'],
        });
        if (!artista) {
            throw new common_1.NotFoundException(`Artista con ID ${id} no encontrado`);
        }
        return artista;
    }
    async update(id, dto) {
        await this.findOne(id);
        const updateArtista = await this.repo.preload({ id, ...dto });
        if (!updateArtista) {
            throw new common_1.ConflictException(`No se pudo cargar los datos para actualizar`);
        }
        try {
            await this.repo.save(updateArtista);
            if (dto.redes && dto.redes.length > 0) {
                await this.repoArtistaRedes.delete({ artista: { id } });
                const redes = await Promise.all(dto.redes.map(async (element) => {
                    const red = await this.redesService.findOne(element.id_red);
                    if (!red) {
                        throw new common_1.NotFoundException(`Red con ID ${element.id_red} no encontrada`);
                    }
                    return red;
                }));
                const artistaRedesPromises = dto.redes.map((element, index) => {
                    const artistaRedes = this.repoArtistaRedes.create({
                        artista: updateArtista,
                        red: redes[index],
                        url: element.url,
                    });
                    return this.repoArtistaRedes.save(artistaRedes);
                });
                await Promise.all(artistaRedesPromises);
                return this.findOne(id);
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error actualizando el artista con ID ${id}`);
        }
    }
    async remove(id) {
        const artista = await this.findOne(id);
        try {
            await this.repoArtistaRedes.delete({ artista: { id } });
            await this.repo.remove(artista);
            return { message: `Artista con ID ${id} eliminado correctamente` };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error eliminando el artista con ID ${id}`);
        }
    }
    async removeAll() {
        try {
            await this.repoArtistaRedes.delete({});
            await this.repo.delete({});
            return { message: 'Todos los artistas eliminados correctamente' };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error eliminando todos los artistas');
        }
    }
};
exports.ArtistaService = ArtistaService;
exports.ArtistaService = ArtistaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(artista_entity_1.Artista)),
    __param(1, (0, typeorm_2.InjectRepository)(artista_redes_entity_1.ArtistaRedes)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        redes_service_1.RedesService])
], ArtistaService);
//# sourceMappingURL=artista.service.js.map