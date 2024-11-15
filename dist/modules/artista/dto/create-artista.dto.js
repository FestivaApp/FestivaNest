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
exports.CreateArtistaDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateArtistaDto {
}
exports.CreateArtistaDto = CreateArtistaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es requerido' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser un texto' }),
    __metadata("design:type", String)
], CreateArtistaDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El tipo debe ser un texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArtistaDto.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La descripción debe ser un texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArtistaDto.prototype, "descrip", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La biografía debe ser un texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArtistaDto.prototype, "biografia", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Las etiquetas deben ser un texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArtistaDto.prototype, "tags", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La URL de la foto debe ser un texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArtistaDto.prototype, "url_foto", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La URL de la segunda foto debe ser un texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArtistaDto.prototype, "url_foto2", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateRedDto),
    __metadata("design:type", Array)
], CreateArtistaDto.prototype, "redes", void 0);
class CreateRedDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateRedDto.prototype, "id_red", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La URL es requerida' }),
    (0, class_validator_1.IsString)({ message: 'La URL debe ser un texto' }),
    __metadata("design:type", String)
], CreateRedDto.prototype, "url", void 0);
//# sourceMappingURL=create-artista.dto.js.map