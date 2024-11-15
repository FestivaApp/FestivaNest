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
exports.HorarioAtencion = void 0;
const typeorm_1 = require("typeorm");
const discoteca_entity_1 = require("./discoteca.entity");
let HorarioAtencion = class HorarioAtencion {
};
exports.HorarioAtencion = HorarioAtencion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HorarioAtencion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
        comment: '1: Lunes, 2: Martes, ..., 7: Domingo',
        unsigned: true,
    }),
    __metadata("design:type", Number)
], HorarioAtencion.prototype, "dia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'time',
    }),
    __metadata("design:type", String)
], HorarioAtencion.prototype, "hora_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'time',
    }),
    __metadata("design:type", String)
], HorarioAtencion.prototype, "hora_fin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => discoteca_entity_1.Discoteca, (discoteca) => discoteca.horariosAtencion),
    __metadata("design:type", discoteca_entity_1.Discoteca)
], HorarioAtencion.prototype, "discoteca", void 0);
exports.HorarioAtencion = HorarioAtencion = __decorate([
    (0, typeorm_1.Entity)()
], HorarioAtencion);
//# sourceMappingURL=horario-atencion.entity.js.map