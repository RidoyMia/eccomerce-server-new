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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const User_model_1 = require("./User.model");
const createUserService = (UserData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const getResult = yield User_model_1.userModel.find({ email: UserData === null || UserData === void 0 ? void 0 : UserData.email });
    if ((_a = getResult[0]) === null || _a === void 0 ? void 0 : _a.name) {
        return getResult[0];
    }
    const result = yield User_model_1.userModel.create(UserData);
    return result;
});
const loginUserService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.userModel.find({ email: email });
    return result;
});
const getAlluserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.userModel.find();
    return result;
});
exports.userServices = {
    createUserService, loginUserService, getAlluserService
};
