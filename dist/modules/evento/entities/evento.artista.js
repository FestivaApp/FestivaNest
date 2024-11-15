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
exports.EventoArtista = void 0;
const typeorm_1 = require("typeorm");
const evento_entity_1 = require("./evento.entity");
const artista_entity_1 = require("../../artista/entities/artista.entity");
let EventoArtista = class EventoArtista {
};
exports.EventoArtista = EventoArtista;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EventoArtista.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => evento_entity_1.Evento, (evento) => evento.eventoArtistas, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", evento_entity_1.Evento)
], EventoArtista.prototype, "evento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artista_entity_1.Artista, (artista) => artista.eventos, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", artista_entity_1.Artista)
], EventoArtista.prototype, "artista", void 0);
exports.EventoArtista = EventoArtista = __decorate([
    (0, typeorm_1.Entity)()
], EventoArtista);
//# sourceMappingURL=evento.artista.js.map