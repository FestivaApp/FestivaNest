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
exports.EventoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const evento_entity_1 = require("./entities/evento.entity");
const typeorm_2 = require("@nestjs/typeorm");
const cat_evento_service_1 = require("../cat-evento/cat-evento.service");
const discoteca_service_1 = require("../discoteca/discoteca.service");
const artista_service_1 = require("../artista/artista.service");
const evento_artista_1 = require("./entities/evento.artista");
let EventoService = class EventoService {
    constructor(repo, repoEventoArtista, categoriaService, discotecaService, artistaService) {
        this.repo = repo;
        this.repoEventoArtista = repoEventoArtista;
        this.categoriaService = categoriaService;
        this.discotecaService = discotecaService;
        this.artistaService = artistaService;
    }
    async create(createEventoDto) {
        const categoria = await this.categoriaService.findOne(createEventoDto.idCategoria);
        const discoteca = await this.discotecaService.findOne(createEventoDto.idDiscoteca);
        const artistas = await Promise.all(createEventoDto.artistas.map((id) => this.artistaService.findOne(id)));
        const evento = this.repo.create({
            ...createEventoDto,
            categoria,
            discoteca,
        });
        await this.repo.save(evento);
        const listEventoArtista = artistas.map((artista) => {
            return this.repoEventoArtista.create({
                artista,
                evento,
            });
        });
        await this.repoEventoArtista.save(listEventoArtista);
        return await this.findOne(evento.id);
    }
    async findAll() {
        const res = await this.repo.find({
            relations: ['eventoArtistas', 'eventoArtistas.artista'],
        });
        const map = res.map(evento => {
            return {
                ...evento,
                eventoArtistas: evento.eventoArtistas.map((ea) => ea.artista)
            };
        });
        return map;
    }
    async findAllPlane() {
        const list = await this.findAll();
        return list.map((evento) => ({
            ...evento,
            categoria: evento.categoria.nombre,
        }));
    }
    async findOne(id) {
        const evento = await this.repo.findOne({ where: { id } });
        if (!evento) {
            throw new Error('Evento no encontrado');
        }
        return evento;
    }
    update(id, updateEventoDto) {
        return `This action updates a #${id} evento`;
    }
    remove(id) {
        return `This action removes a #${id} evento`;
    }
};
exports.EventoService = EventoService;
exports.EventoService = EventoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(evento_entity_1.Evento)),
    __param(1, (0, typeorm_2.InjectRepository)(evento_artista_1.EventoArtista)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        cat_evento_service_1.CatEventoService,
        discoteca_service_1.DiscotecaService,
        artista_service_1.ArtistaService])
], EventoService);
//# sourceMappingURL=evento.service.js.map