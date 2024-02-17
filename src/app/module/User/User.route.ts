import express from "express";
const Userrouter = express.Router();
import {userController} from "./User.controller"
Userrouter.post('/create-user', userController.createUserController)
Userrouter.get('/login', userController.loginUserController)


export default Userrouter;