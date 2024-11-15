"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArtistaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_artista_dto_1 = require("./create-artista.dto");
class UpdateArtistaDto extends (0, mapped_types_1.PartialType)(create_artista_dto_1.CreateArtistaDto) {
}
exports.UpdateArtistaDto = UpdateArtistaDto;
//# sourceMappingURL=update-artista.dto.js.map