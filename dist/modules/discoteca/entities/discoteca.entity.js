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
exports.Discoteca = void 0;
const typeorm_1 = require("typeorm");
const discoteca_redes_entity_1 = require("./discoteca-redes.entity");
const horario_atencion_entity_1 = require("./horario-atencion.entity");
const evento_entity_1 = require("../../evento/entities/evento.entity");
let Discoteca = class Discoteca {
};
exports.Discoteca = Discoteca;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Discoteca.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        unique: true,
    }),
    __metadata("design:type", String)
], Discoteca.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: '',
        length: 1000,
    }),
    __metadata("design:type", String)
], Discoteca.prototype, "descrip", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: '',
        length: 255,
    }),
    __metadata("design:type", String)
], Discoteca.prototype, "url_logo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: '',
        length: 255,
    }),
    __metadata("design:type", String)
], Discoteca.prototype, "url_portada", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: '',
    }),
    __metadata("design:type", String)
], Discoteca.prototype, "direc", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: '',
        length: 255,
    }),
    __metadata("design:type", String)
], Discoteca.prototype, "url_maps", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        unique: true,
    }),
    __metadata("design:type", String)
], Discoteca.prototype, "telf", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => discoteca_redes_entity_1.DiscotecaRedes, (discotecaRedes) => discotecaRedes.discoteca, { cascade: true }),
    __metadata("design:type", Array)
], Discoteca.prototype, "discotecaRedes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => horario_atencion_entity_1.HorarioAtencion, (horarioAtencion) => horarioAtencion.discoteca, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Discoteca.prototype, "horariosAtencion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => evento_entity_1.Evento, (ev) => ev.discoteca, {
        cascade: ['remove'],
    }),
    __metadata("design:type", Array)
], Discoteca.prototype, "eventos", void 0);
exports.Discoteca = Discoteca = __decorate([
    (0, typeorm_1.Entity)()
], Discoteca);
//# sourceMappingURL=discoteca.entity.js.map