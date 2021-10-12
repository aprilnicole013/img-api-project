"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateImage = function (req, res, next) {
    var error = [];
    var filename;
    var width;
    var height;
    if (!req.query.filename === undefined) {
        error.push('Missing filename');
    }
    if (req.query.width === undefined) {
        error.push('Missing image width');
    }
    if (req.query.height === undefined) {
        error.push('Missing image height');
    }
    if (error.length === 0) {
        next();
    }
    else {
        res.status(400).send(error.join('; '));
    }
};
exports.default = validateImage;
