"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatEventoModule = void 0;
const common_1 = require("@nestjs/common");
const cat_evento_service_1 = require("./cat-evento.service");
const cat_evento_controller_1 = require("./cat-evento.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cat_evento_entity_1 = require("./entities/cat-evento.entity");
let CatEventoModule = class CatEventoModule {
};
exports.CatEventoModule = CatEventoModule;
exports.CatEventoModule = CatEventoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cat_evento_entity_1.CatEvento])],
        exports: [
            cat_evento_service_1.CatEventoService
        ],
        controllers: [cat_evento_controller_1.CatEventoController],
        providers: [cat_evento_service_1.CatEventoService],
    })
], CatEventoModule);
//# sourceMappingURL=cat-evento.module.js.map