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
exports.DiscotecaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const discoteca_entity_1 = require("./entities/discoteca.entity");
const typeorm_2 = require("@nestjs/typeorm");
const discoteca_redes_entity_1 = require("./entities/discoteca-redes.entity");
const redes_service_1 = require("../redes/redes.service");
const horario_atencion_entity_1 = require("./entities/horario-atencion.entity");
const evento_entity_1 = require("../evento/entities/evento.entity");
let DiscotecaService = class DiscotecaService {
    constructor(repo, repoDiscotecaRedes, repoHorarioAtencion, redesService, dataSource) {
        this.repo = repo;
        this.repoDiscotecaRedes = repoDiscotecaRedes;
        this.repoHorarioAtencion = repoHorarioAtencion;
        this.redesService = redesService;
        this.dataSource = dataSource;
    }
    async create(createDiscotecaDto) {
        try {
            const { redes = [], horariosAtencion = [], ...discotecaDetails } = createDiscotecaDto;
            await this.findOneByFilter('Nombre', { nombre: discotecaDetails.nombre });
            await this.findOneByFilter('Teléfono', { telf: discotecaDetails.telf });
            const discoteca = this.repo.create({
                ...discotecaDetails,
                discotecaRedes: await Promise.all(redes.map(async (red) => {
                    const redFind = await this.redesService.findOne(red.idRed);
                    return this.repoDiscotecaRedes.create({
                        url: red.url,
                        red: redFind,
                    });
                })),
                horariosAtencion: horariosAtencion.map((horario) => this.repoHorarioAtencion.create(horario)),
            });
            await this.repo.save(discoteca);
            return discoteca;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async findAll() {
        const res = await this.repo.find({
            relations: ['discotecaRedes.red'],
        });
        return res.map((discoteca) => {
            return {
                ...discoteca,
                discotecaRedes: discoteca.discotecaRedes.map((dr) => {
                    return {
                        url: dr.url,
                        red: dr.red.nombre,
                        cod: dr.red.cod,
                        logo: dr.red.logo,
                    };
                }),
            };
        });
    }
    async findOne(id) {
        const discoteca = await this.repo.findOne({
            relations: ['discotecaRedes.red'],
            where: { id },
        });
        if (!discoteca)
            throw new Error('Discoteca no encontrada');
        return discoteca;
    }
    async findOnePlane(id) {
        const discoteca = await this.repo.findOne({
            relations: ['discotecaRedes.red'],
            where: { id },
        });
        if (!discoteca) {
            throw new common_1.NotFoundException('Discoteca no encontrada');
        }
        return {
            ...discoteca,
            discotecaRedes: discoteca.discotecaRedes.map((dr) => {
                return {
                    url: dr.url,
                    red: dr.red.nombre,
                    cod: dr.red.cod,
                    logo: dr.red.logo,
                };
            }),
        };
    }
    async search(term) {
        const list = await this.repo.find({
            where: [{ nombre: (0, typeorm_1.Like)(`%${term}%`) }],
            select: ['id', 'nombre', 'url_logo'],
            take: 10,
        });
        return list;
    }
    async update(id, updateDiscotecaDto) {
        const { redes, horariosAtencion, ...discotecaDetails } = updateDiscotecaDto;
        const discoteca = await this.repo.preload({
            id: id,
            ...discotecaDetails,
        });
        if (!discoteca)
            throw new Error('Discoteca no encontrada');
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            if (redes) {
                await queryRunner.manager.delete(discoteca_redes_entity_1.DiscotecaRedes, { discoteca: { id } });
                discoteca.discotecaRedes = await Promise.all(redes.map(async (red) => {
                    const redFind = await this.redesService.findOne(red.idRed);
                    return this.repoDiscotecaRedes.create({
                        url: red.url,
                        red: redFind,
                    });
                }));
            }
            if (horariosAtencion) {
                await queryRunner.manager.delete(horario_atencion_entity_1.HorarioAtencion, {
                    discoteca: { id },
                });
                discoteca.horariosAtencion = horariosAtencion.map((horario) => this.repoHorarioAtencion.create(horario));
            }
            await queryRunner.manager.save(discoteca);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return this.findOne(id);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            await queryRunner.release();
            throw new Error(error.message);
        }
    }
    async remove(id) {
        const discoteca = await this.findOne(id);
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.delete(discoteca_redes_entity_1.DiscotecaRedes, {
                discoteca: { id },
            });
            await queryRunner.manager.delete(horario_atencion_entity_1.HorarioAtencion, {
                discoteca: { id },
            });
            await queryRunner.manager.delete(evento_entity_1.Evento, {
                discoteca: { id },
            });
            await queryRunner.manager.remove(discoteca);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            await queryRunner.release();
            throw new Error(error.message);
        }
    }
    async findOneByFilter(nombre, params) {
        if (!nombre)
            throw new Error('El nombre del campo no puede estar vacio');
        const res = await this.repo.findOne({ where: { ...params } });
        if (res)
            throw new Error(`ya existe una discoteca con este parametro: ${nombre}`);
    }
};
exports.DiscotecaService = DiscotecaService;
exports.DiscotecaService = DiscotecaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(discoteca_entity_1.Discoteca)),
    __param(1, (0, typeorm_2.InjectRepository)(discoteca_redes_entity_1.DiscotecaRedes)),
    __param(2, (0, typeorm_2.InjectRepository)(horario_atencion_entity_1.HorarioAtencion)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        redes_service_1.RedesService,
        typeorm_1.DataSource])
], DiscotecaService);
//# sourceMappingURL=discoteca.service.js.map