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
exports.ArtistaRedes = void 0;
const redes_entity_1 = require("../../redes/entities/redes.entity");
const typeorm_1 = require("typeorm");
const artista_entity_1 = require("./artista.entity");
let ArtistaRedes = class ArtistaRedes {
};
exports.ArtistaRedes = ArtistaRedes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ArtistaRedes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false
    }),
    __metadata("design:type", String)
], ArtistaRedes.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => redes_entity_1.Redes, redes => redes.artistaRedes),
    __metadata("design:type", redes_entity_1.Redes)
], ArtistaRedes.prototype, "red", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artista_entity_1.Artista, art => art.redes),
    __metadata("design:type", artista_entity_1.Artista)
], ArtistaRedes.prototype, "artista", void 0);
exports.ArtistaRedes = ArtistaRedes = __decorate([
    (0, typeorm_1.Entity)()
], ArtistaRedes);
//# sourceMappingURL=artista-redes.entity.js.map