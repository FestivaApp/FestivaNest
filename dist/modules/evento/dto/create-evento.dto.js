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
exports.CreateEventoDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateEventoDto {
}
exports.CreateEventoDto = CreateEventoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'El titulo debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe incluir un titulo' }),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La descripción debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe incluir una descripción' }),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "descrip", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La url de la foto debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe incluir una url de la foto' }),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "url_foto", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe incluir una fecha' }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)({ message: 'La fecha debe ser una fecha válida' }),
    __metadata("design:type", Date)
], CreateEventoDto.prototype, "fecha", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La hora debe ser un string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe incluir una hora' }),
    (0, class_validator_1.IsMilitaryTime)({ message: 'La hora debe ser una hora válida' }),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "hora", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'La categoria debe ser un número' }),
    (0, class_validator_1.IsPositive)({ message: 'La categoria debe ser un número positivo' }),
    __metadata("design:type", Number)
], CreateEventoDto.prototype, "idCategoria", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'La discoteca debe ser un número' }),
    (0, class_validator_1.IsPositive)({ message: 'La discoteca debe ser un número positivo' }),
    __metadata("design:type", Number)
], CreateEventoDto.prototype, "idDiscoteca", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Los artistas deben ser un arreglo' }),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Debe haber al menos un artista' }),
    (0, class_validator_1.IsInt)({ each: true, message: 'Cada artista debe ser un número entero' }),
    __metadata("design:type", Array)
], CreateEventoDto.prototype, "artistas", void 0);
//# sourceMappingURL=create-evento.dto.js.map