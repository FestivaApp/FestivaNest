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
exports.Redes = void 0;
const artista_redes_entity_1 = require("../../artista/entities/artista-redes.entity");
const discoteca_redes_entity_1 = require("../../discoteca/entities/discoteca-redes.entity");
const typeorm_1 = require("typeorm");
let Redes = class Redes {
};
exports.Redes = Redes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Redes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], Redes.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Redes.prototype, "cod", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: ''
    }),
    __metadata("design:type", String)
], Redes.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => discoteca_redes_entity_1.DiscotecaRedes, discotecaRedes => discotecaRedes.red),
    __metadata("design:type", Array)
], Redes.prototype, "discotecaRedes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => artista_redes_entity_1.ArtistaRedes, artistaRedes => artistaRedes.red),
    __metadata("design:type", Array)
], Redes.prototype, "artistaRedes", void 0);
exports.Redes = Redes = __decorate([
    (0, typeorm_1.Entity)()
], Redes);
//# sourceMappingURL=redes.entity.js.map