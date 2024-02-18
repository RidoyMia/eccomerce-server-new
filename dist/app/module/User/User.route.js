"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Userrouter = express_1.default.Router();
const User_controller_1 = require("./User.controller");
Userrouter.post('/create-user', User_controller_1.userController.createUserController);
Userrouter.get('/login/:email', User_controller_1.userController.loginUserController);
Userrouter.get('/all', User_controller_1.userController.getAllUsersController);
exports.default = Userrouter;
