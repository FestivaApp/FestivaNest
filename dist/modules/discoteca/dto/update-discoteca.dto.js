"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDiscotecaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_discoteca_dto_1 = require("./create-discoteca.dto");
class UpdateDiscotecaDto extends (0, mapped_types_1.PartialType)(create_discoteca_dto_1.CreateDiscotecaDto) {
}
exports.UpdateDiscotecaDto = UpdateDiscotecaDto;
//# sourceMappingURL=update-discoteca.dto.js.map