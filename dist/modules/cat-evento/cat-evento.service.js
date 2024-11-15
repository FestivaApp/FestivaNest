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
exports.CatEventoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cat_evento_entity_1 = require("./entities/cat-evento.entity");
let CatEventoService = class CatEventoService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createCatEventoDto) {
        const catEVento = this.repo.create(createCatEventoDto);
        if (!catEVento)
            throw new common_1.InternalServerErrorException('No se pudo crear la categoria');
        const nombreEvento = await this.repo.findOne({
            where: { nombre: catEVento.nombre },
        });
        if (nombreEvento)
            throw new common_1.ConflictException('El nombre de la categoria ya existe');
        await this.repo.save(catEVento);
        return catEVento;
    }
    async findAll() {
        return await this.repo.find();
    }
    async findOne(id) {
        const catEvento = await this.repo.findOne({ where: { id } });
        if (!catEvento)
            throw new common_1.NotFoundException('La categoria no existe');
        return catEvento;
    }
    async update(id, updateCatEventoDto) {
        await this.findOne(id);
        const preload = await this.repo.preload({
            id: id,
            ...updateCatEventoDto,
        });
        if (!preload)
            throw new common_1.InternalServerErrorException('No se pudo actualizar el evento');
        const nombreEvento = await this.repo.findOne({
            where: { nombre: preload.nombre },
        });
        if (nombreEvento)
            throw new common_1.ConflictException('El nombre ya existe');
        await this.repo.save(preload);
        return preload;
    }
    async remove(id) {
        const catEvento = await this.findOne(id);
        await this.repo.delete(catEvento);
        return;
    }
};
exports.CatEventoService = CatEventoService;
exports.CatEventoService = CatEventoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cat_evento_entity_1.CatEvento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CatEventoService);
//# sourceMappingURL=cat-evento.service.js.map