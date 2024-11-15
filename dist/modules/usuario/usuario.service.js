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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./entities/usuario.entity");
const typeorm_2 = require("typeorm");
let UsuarioService = class UsuarioService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createUsuarioDto) {
        const user = this.repo.create(createUsuarioDto);
        if (!user)
            throw new common_1.InternalServerErrorException('Error al crear el usuario');
        await this.repo.save(user);
        return user;
    }
    async findAll() {
        return await this.repo.find({
            relations: ['tipoUser'],
        });
    }
    async findOneById(id) {
        const user = await this.repo.findOne({
            relations: ['tipoUser'],
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return user;
    }
    async findOne(correo) {
        const user = await this.repo.findOne({
            relations: ['tipoUser'],
            where: { correo },
        });
        if (!user)
            throw new common_1.NotFoundException(`Usuario con correo ${correo} no encontrado`);
        return user;
    }
    update(id, updateUsuarioDto) {
        return `This action updates a #${id} usuario`;
    }
    remove(id) {
        return `This action removes a #${id} usuario`;
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map