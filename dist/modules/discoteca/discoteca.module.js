"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscotecaModule = void 0;
const common_1 = require("@nestjs/common");
const discoteca_service_1 = require("./discoteca.service");
const discoteca_controller_1 = require("./discoteca.controller");
const typeorm_1 = require("@nestjs/typeorm");
const discoteca_redes_entity_1 = require("./entities/discoteca-redes.entity");
const discoteca_entity_1 = require("./entities/discoteca.entity");
const horario_atencion_entity_1 = require("./entities/horario-atencion.entity");
const redes_module_1 = require("../redes/redes.module");
let DiscotecaModule = class DiscotecaModule {
};
exports.DiscotecaModule = DiscotecaModule;
exports.DiscotecaModule = DiscotecaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                discoteca_redes_entity_1.DiscotecaRedes,
                discoteca_entity_1.Discoteca,
                horario_atencion_entity_1.HorarioAtencion
            ]),
            redes_module_1.RedesModule
        ],
        exports: [
            discoteca_service_1.DiscotecaService
        ],
        controllers: [discoteca_controller_1.DiscotecaController],
        providers: [discoteca_service_1.DiscotecaService],
    })
], DiscotecaModule);
//# sourceMappingURL=discoteca.module.js.map