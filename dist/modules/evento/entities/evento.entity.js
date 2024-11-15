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
exports.Evento = void 0;
const typeorm_1 = require("typeorm");
const discoteca_entity_1 = require("../../discoteca/entities/discoteca.entity");
const cat_evento_entity_1 = require("../../cat-evento/entities/cat-evento.entity");
const evento_artista_1 = require("./evento.artista");
let Evento = class Evento {
};
exports.Evento = Evento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Evento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false
    }),
    __metadata("design:type", String)
], Evento.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false
    }),
    __metadata("design:type", String)
], Evento.prototype, "descrip", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: '',
        length: 255,
    }),
    __metadata("design:type", String)
], Evento.prototype, "url_foto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
    }),
    __metadata("design:type", Date)
], Evento.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'time',
    }),
    __metadata("design:type", String)
], Evento.prototype, "hora", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Evento.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cat_evento_entity_1.CatEvento, (catEvento) => catEvento.eventos, { eager: true }),
    __metadata("design:type", cat_evento_entity_1.CatEvento)
], Evento.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => discoteca_entity_1.Discoteca, (discoteca) => discoteca.eventos, { eager: true }),
    __metadata("design:type", discoteca_entity_1.Discoteca)
], Evento.prototype, "discoteca", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => evento_artista_1.EventoArtista, (eventoArtista) => eventoArtista.evento, {
        eager: true,
        cascade: ['remove'],
    }),
    __metadata("design:type", Array)
], Evento.prototype, "eventoArtistas", void 0);
exports.Evento = Evento = __decorate([
    (0, typeorm_1.Entity)()
], Evento);
//# sourceMappingURL=evento.entity.js.map