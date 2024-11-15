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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHorarioAtencionDto = void 0;
const class_validator_1 = require("class-validator");
class CreateHorarioAtencionDto {
}
exports.CreateHorarioAtencionDto = CreateHorarioAtencionDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1, { message: 'El día debe ser mayor o igual a 1' }),
    (0, class_validator_1.Max)(7, { message: 'El día debe ser menor o igual a 7' }),
    __metadata("design:type", Number)
], CreateHorarioAtencionDto.prototype, "dia", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La hora de inicio debe ser un string' }),
    (0, class_validator_1.IsMilitaryTime)({ message: 'La hora de inicio debe ser una hora válida' }),
    __metadata("design:type", String)
], CreateHorarioAtencionDto.prototype, "hora_inicio", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La hora de fin debe ser un string' }),
    (0, class_validator_1.IsMilitaryTime)({ message: 'La hora de fin debe ser una hora válida' }),
    __metadata("design:type", String)
], CreateHorarioAtencionDto.prototype, "hora_fin", void 0);
//# sourceMappingURL=create-horario-atencion.dto.js.map