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
exports.DiscotecaController = void 0;
const common_1 = require("@nestjs/common");
const discoteca_service_1 = require("./discoteca.service");
const create_discoteca_dto_1 = require("./dto/create-discoteca.dto");
const update_discoteca_dto_1 = require("./dto/update-discoteca.dto");
let DiscotecaController = class DiscotecaController {
    constructor(discotecaService) {
        this.discotecaService = discotecaService;
    }
    create(createDiscotecaDto) {
        return this.discotecaService.create(createDiscotecaDto);
    }
    findAll() {
        return this.discotecaService.findAll();
    }
    search(term) {
        return this.discotecaService.search(term);
    }
    findOne(id) {
        return this.discotecaService.findOnePlane(id);
    }
    update(id, updateDiscotecaDto) {
        return this.discotecaService.update(+id, updateDiscotecaDto);
    }
    remove(id) {
        return this.discotecaService.remove(+id);
    }
};
exports.DiscotecaController = DiscotecaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_discoteca_dto_1.CreateDiscotecaDto]),
    __metadata("design:returntype", void 0)
], DiscotecaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiscotecaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("search"),
    __param(0, (0, common_1.Query)("term")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscotecaController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DiscotecaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_discoteca_dto_1.UpdateDiscotecaDto]),
    __metadata("design:returntype", void 0)
], DiscotecaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscotecaController.prototype, "remove", null);
exports.DiscotecaController = DiscotecaController = __decorate([
    (0, common_1.Controller)('discoteca'),
    __metadata("design:paramtypes", [discoteca_service_1.DiscotecaService])
], DiscotecaController);
//# sourceMappingURL=discoteca.controller.js.map