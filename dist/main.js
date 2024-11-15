"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const https_certificate_1 = require("./config/https-certificate");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions: (0, https_certificate_1.httpsCertificate)(),
    });
    const logger = new common_1.Logger('bootstrap');
    app.enableCors();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const port = process.env.PORT || 3000;
    await app.listen(port);
    logger.log(`Servidor corriendo en el puerto: ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map