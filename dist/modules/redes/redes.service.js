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
exports.RedesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const redes_entity_1 = require("./entities/redes.entity");
const typeorm_2 = require("@nestjs/typeorm");
let RedesService = class RedesService {
    constructor(repo) {
        this.repo = repo;
    }
    async findAll() {
        return await this.repo.find();
    }
    async findOne(id) {
        const item = await this.repo.findOne({ where: { id } });
        if (!item)
            throw new Error('Red no encontrada');
        return item;
    }
};
exports.RedesService = RedesService;
exports.RedesService = RedesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(redes_entity_1.Redes)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RedesService);
//# sourceMappingURL=redes.service.js.map