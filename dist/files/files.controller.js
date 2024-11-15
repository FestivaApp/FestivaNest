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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("./files.service");
const platform_express_1 = require("@nestjs/platform-express");
const fileFilter_helper_1 = require("./helpers/fileFilter.helper");
const multer_1 = require("multer");
const fileNamer_helper_1 = require("./helpers/fileNamer.helper");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    getArtistaImage(res, imageName) {
        const path = this.filesService.getStaticArtistaImage(imageName);
        res.sendFile(path);
    }
    uploadArtistaImage(file) {
        if (!file)
            throw new Error('No file uploaded');
        const host = process.env.HOST_API;
        const secureUrl = `${host}/files/artista/${file.filename}`;
        return {
            secureUrl,
            fileName: file.filename,
        };
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.Get)("artista/:imageName"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('imageName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getArtistaImage", null);
__decorate([
    (0, common_1.Post)('artista'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        fileFilter: fileFilter_helper_1.fileFilter,
        storage: (0, multer_1.diskStorage)({
            destination: './static/artista',
            filename: fileNamer_helper_1.fileNamer,
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadArtistaImage", null);
exports.FilesController = FilesController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
//# sourceMappingURL=files.controller.js.map