"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var images_1 = __importDefault(require("./routes/images"));
var imageValidator_1 = __importDefault(require("./middleware/imageValidator"));
var help_1 = __importDefault(require("./routes/help"));
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api/images', imageValidator_1.default, images_1.default);
app.use('/api*', help_1.default);
app.listen(port, function () {
    console.log("server started at localhost:" + port);
});
exports.default = app;
