"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileNamer = void 0;
const uuid_1 = require("uuid");
const fileNamer = (req, file, callBack) => {
    if (!file)
        return callBack(new Error('File is empty'), false);
    const fileExtension = file.mimetype.split('/').pop();
    const fileName = `${(0, uuid_1.v4)()}.${fileExtension}`;
    callBack(null, fileName);
};
exports.fileNamer = fileNamer;
//# sourceMappingURL=fileNamer.helper.js.map