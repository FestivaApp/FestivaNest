"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const usuario_module_1 = require("./modules/usuario/usuario.module");
const typeorm_1 = require("@nestjs/typeorm");
const discoteca_module_1 = require("./modules/discoteca/discoteca.module");
const evento_module_1 = require("./modules/evento/evento.module");
const artista_module_1 = require("./modules/artista/artista.module");
const config_1 = require("@nestjs/config");
const cat_evento_module_1 = require("./modules/cat-evento/cat-evento.module");
const auth_module_1 = require("./modules/auth/auth.module");
const files_module_1 = require("./files/files.module");
const redes_module_1 = require("./modules/redes/redes.module");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET_KEY,
                signOptions: { expiresIn: '4h' },
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                autoLoadEntities: true,
                synchronize: true,
            }),
            usuario_module_1.UsuarioModule,
            discoteca_module_1.DiscotecaModule,
            evento_module_1.EventoModule,
            artista_module_1.ArtistaModule,
            cat_evento_module_1.CatEventoModule,
            auth_module_1.AuthModule,
            files_module_1.FilesModule,
            redes_module_1.RedesModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map