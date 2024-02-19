"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const User_service_1 = require("./User.service");
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../../../config");
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const result = yield User_service_1.userServices.createUserService(userData);
        res.status(http_status_codes_1.StatusCodes.OK).send({
            data: true,
            result
        });
    }
    catch (error) {
        next(error);
    }
});
const loginUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const result = yield User_service_1.userServices.loginUserService(email);
        const userinfo = { email: result[0].email, role: result[0].role };
        const accesstoken = yield jsonwebtoken_1.default.sign(userinfo, config_1.config.accesstoken, { expiresIn: config_1.config.expire });
        res.status(http_status_codes_1.StatusCodes.OK).send({
            data: true,
            result,
            accesstoken
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllUsersController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield User_service_1.userServices.getAlluserService();
        res.status(http_status_codes_1.StatusCodes.OK).send({
            data: true,
            result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.userController = {
    createUserController, loginUserController, getAllUsersController
};
