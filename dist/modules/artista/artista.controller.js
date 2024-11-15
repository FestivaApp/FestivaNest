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
exports.ArtistaController = void 0;
const common_1 = require("@nestjs/common");
const artista_service_1 = require("./artista.service");
const create_artista_dto_1 = require("./dto/create-artista.dto");
const update_artista_dto_1 = require("./dto/update-artista.dto");
const platform_express_1 = require("@nestjs/platform-express");
const auth_guard_1 = require("../../guards/auth.guard");
let ArtistaController = class ArtistaController {
    constructor(artistaService) {
        this.artistaService = artistaService;
    }
    create(createArtistaDto) {
        return this.artistaService.create(createArtistaDto);
    }
    findAll() {
        return this.artistaService.findAll();
    }
    findOne(id) {
        return this.artistaService.findOne(+id);
    }
    update(id, updateArtistaDto) {
        return this.artistaService.update(+id, updateArtistaDto);
    }
    removeAll() {
        return this.artistaService.removeAll();
    }
    remove(id) {
        const idArtista = Number(id);
        if (isNaN(idArtista)) {
            throw new common_1.ConflictException('El ID debe ser un número');
        }
        return this.artistaService.remove(idArtista);
    }
    uploadFile(file) {
        console.log(file);
        const fs = require('fs');
        const nombreArchivo = new Date().getTime() + '.jpg';
        fs.writeFileSync(`assets/images/${nombreArchivo}`, file.buffer);
        return nombreArchivo;
    }
};
exports.ArtistaController = ArtistaController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artista_dto_1.CreateArtistaDto]),
    __metadata("design:returntype", void 0)
], ArtistaController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArtistaController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtistaController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_artista_dto_1.UpdateArtistaDto]),
    __metadata("design:returntype", void 0)
], ArtistaController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArtistaController.prototype, "removeAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtistaController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArtistaController.prototype, "uploadFile", null);
exports.ArtistaController = ArtistaController = __decorate([
    (0, common_1.Controller)('artista'),
    __metadata("design:paramtypes", [artista_service_1.ArtistaService])
], ArtistaController);
//# sourceMappingURL=artista.controller.js.map