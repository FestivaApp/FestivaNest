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
exports.CatEventoController = void 0;
const common_1 = require("@nestjs/common");
const cat_evento_service_1 = require("./cat-evento.service");
const create_cat_evento_dto_1 = require("./dto/create-cat-evento.dto");
const update_cat_evento_dto_1 = require("./dto/update-cat-evento.dto");
let CatEventoController = class CatEventoController {
    constructor(catEventoService) {
        this.catEventoService = catEventoService;
    }
    create(createCatEventoDto) {
        return this.catEventoService.create(createCatEventoDto);
    }
    findAll() {
        return this.catEventoService.findAll();
    }
    findOne(id) {
        return this.catEventoService.findOne(+id);
    }
    update(id, updateCatEventoDto) {
        return this.catEventoService.update(+id, updateCatEventoDto);
    }
    remove(id) {
        return this.catEventoService.remove(+id);
    }
};
exports.CatEventoController = CatEventoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_evento_dto_1.CreateCatEventoDto]),
    __metadata("design:returntype", void 0)
], CatEventoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatEventoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatEventoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cat_evento_dto_1.UpdateCatEventoDto]),
    __metadata("design:returntype", void 0)
], CatEventoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatEventoController.prototype, "remove", null);
exports.CatEventoController = CatEventoController = __decorate([
    (0, common_1.Controller)('cat-evento'),
    __metadata("design:paramtypes", [cat_evento_service_1.CatEventoService])
], CatEventoController);
//# sourceMappingURL=cat-evento.controller.js.map