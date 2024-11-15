"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedesModule = void 0;
const common_1 = require("@nestjs/common");
const redes_service_1 = require("./redes.service");
const redes_controller_1 = require("./redes.controller");
const typeorm_1 = require("@nestjs/typeorm");
const redes_entity_1 = require("./entities/redes.entity");
let RedesModule = class RedesModule {
};
exports.RedesModule = RedesModule;
exports.RedesModule = RedesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([redes_entity_1.Redes])],
        exports: [redes_service_1.RedesService],
        controllers: [redes_controller_1.RedesController],
        providers: [redes_service_1.RedesService],
    })
], RedesModule);
//# sourceMappingURL=redes.module.js.map