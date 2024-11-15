"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
const fileFilter = (req, file, callBack) => {
    if (!file)
        return callBack(new Error('File is empty'), false);
    const fileExtension = file.mimetype.split('/').pop();
    const validExtensions = ['jpeg', 'jpg', 'png', 'gif'];
    if (!validExtensions.includes(fileExtension)) {
        return callBack(new Error('File type is not supported'), false);
    }
    callBack(null, true);
};
exports.fileFilter = fileFilter;
//# sourceMappingURL=fileFilter.helper.js.map