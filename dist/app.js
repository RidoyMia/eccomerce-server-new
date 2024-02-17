"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_codes_1 = require("http-status-codes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send({
        data: true,
        result: 'this is main root of sharing data'
    });
});
app.use((req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send({
        data: false,
        message: 'Not-Found',
        result: {},
        errorMessage: {
            path: req.originalUrl,
            message: 'Not-found'
        }
    });
});
exports.default = app;
