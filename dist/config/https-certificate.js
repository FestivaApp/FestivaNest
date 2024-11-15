"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpsCertificate = void 0;
const fs = require("fs");
const path = require("path");
const httpsCertificate = () => {
    const isProduction = process.env.PRODUCTION === 'true';
    if (!isProduction) {
        return null;
    }
    const httpsOptions = {
        key: fs.readFileSync(path.join('/etc/letsencrypt/live/sv-yaaugkfbpu.cloud.elastika.pe/privkey.pem')),
        cert: fs.readFileSync(path.join('/etc/letsencrypt/live/sv-yaaugkfbpu.cloud.elastika.pe/fullchain.pem')),
    };
    return httpsOptions;
};
exports.httpsCertificate = httpsCertificate;
//# sourceMappingURL=https-certificate.js.map