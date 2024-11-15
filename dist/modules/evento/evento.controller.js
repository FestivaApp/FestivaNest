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
exports.EventoController = void 0;
const common_1 = require("@nestjs/common");
const evento_service_1 = require("./evento.service");
const create_evento_dto_1 = require("./dto/create-evento.dto");
const update_evento_dto_1 = require("./dto/update-evento.dto");
let EventoController = class EventoController {
    constructor(eventoService) {
        this.eventoService = eventoService;
    }
    create(createEventoDto) {
        return this.eventoService.create(createEventoDto);
    }
    findAll() {
        return this.eventoService.findAll();
    }
    findOne(id) {
        return this.eventoService.findOne(+id);
    }
    update(id, updateEventoDto) {
        return this.eventoService.update(+id, updateEventoDto);
    }
    remove(id) {
        return this.eventoService.remove(+id);
    }
};
exports.EventoController = EventoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evento_dto_1.CreateEventoDto]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_evento_dto_1.UpdateEventoDto]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "remove", null);
exports.EventoController = EventoController = __decorate([
    (0, common_1.Controller)('evento'),
    __metadata("design:paramtypes", [evento_service_1.EventoService])
], EventoController);
//# sourceMappingURL=evento.controller.js.map