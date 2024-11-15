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
exports.CatEvento = void 0;
const evento_entity_1 = require("../../evento/entities/evento.entity");
const typeorm_1 = require("typeorm");
let CatEvento = class CatEvento {
};
exports.CatEvento = CatEvento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CatEvento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        unique: true
    }),
    __metadata("design:type", String)
], CatEvento.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => evento_entity_1.Evento, evento => evento.categoria),
    __metadata("design:type", Array)
], CatEvento.prototype, "eventos", void 0);
exports.CatEvento = CatEvento = __decorate([
    (0, typeorm_1.Entity)()
], CatEvento);
//# sourceMappingURL=cat-evento.entity.js.map