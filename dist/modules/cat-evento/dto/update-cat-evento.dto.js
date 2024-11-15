"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCatEventoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cat_evento_dto_1 = require("./create-cat-evento.dto");
class UpdateCatEventoDto extends (0, mapped_types_1.PartialType)(create_cat_evento_dto_1.CreateCatEventoDto) {
}
exports.UpdateCatEventoDto = UpdateCatEventoDto;
//# sourceMappingURL=update-cat-evento.dto.js.map