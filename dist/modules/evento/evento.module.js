"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoModule = void 0;
const common_1 = require("@nestjs/common");
const evento_service_1 = require("./evento.service");
const evento_controller_1 = require("./evento.controller");
const typeorm_1 = require("@nestjs/typeorm");
const evento_entity_1 = require("./entities/evento.entity");
const evento_artista_1 = require("./entities/evento.artista");
const cat_evento_module_1 = require("../cat-evento/cat-evento.module");
const discoteca_module_1 = require("../discoteca/discoteca.module");
const artista_module_1 = require("../artista/artista.module");
let EventoModule = class EventoModule {
};
exports.EventoModule = EventoModule;
exports.EventoModule = EventoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([evento_entity_1.Evento, evento_artista_1.EventoArtista]),
            cat_evento_module_1.CatEventoModule,
            discoteca_module_1.DiscotecaModule,
            artista_module_1.ArtistaModule
        ],
        controllers: [evento_controller_1.EventoController],
        providers: [evento_service_1.EventoService],
    })
], EventoModule);
//# sourceMappingURL=evento.module.js.map