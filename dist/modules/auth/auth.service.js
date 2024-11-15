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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("../usuario/usuario.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwt) {
        this.usersService = usersService;
        this.jwt = jwt;
    }
    async validateUser(correo, pass) {
        const user = await this.usersService.findOne(correo);
        if (!(await bcrypt.compare(pass, user.clave))) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const payload = {
            correo: user.correo,
            id: user.id,
        };
        return {
            access_token: this.jwt.sign(payload),
        };
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt();
        return bcrypt.hash(password, salt);
    }
    async register({ clave, ...dto }) {
        const hashedPassword = await this.hashPassword(clave);
        return this.usersService.create({ clave: hashedPassword, ...dto });
    }
    async getPerfil(id) {
        const perfil = await this.usersService.findOneById(id);
        delete perfil.clave;
        return {
            ...perfil,
            tipoUser: perfil.tipoUser.nombre,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map