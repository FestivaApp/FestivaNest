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
exports.Artista = void 0;
const typeorm_1 = require("typeorm");
const artista_redes_entity_1 = require("./artista-redes.entity");
const evento_artista_1 = require("../../evento/entities/evento.artista");
let Artista = class Artista {
};
exports.Artista = Artista;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Artista.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], Artista.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Artista.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Artista.prototype, "descrip", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Artista.prototype, "biografia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Artista.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Artista.prototype, "url_foto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Artista.prototype, "url_foto2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => artista_redes_entity_1.ArtistaRedes, (artRed) => artRed.artista),
    __metadata("design:type", Array)
], Artista.prototype, "redes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => evento_artista_1.EventoArtista, (eventoArtista) => eventoArtista.artista),
    __metadata("design:type", Array)
], Artista.prototype, "eventos", void 0);
exports.Artista = Artista = __decorate([
    (0, typeorm_1.Entity)()
], Artista);
//# sourceMappingURL=artista.entity.js.map