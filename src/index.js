"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../build/src/routes/index"));
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', index_1.default);
app.listen(port, function () {
    console.log("server started at localhost:" + port);
});
