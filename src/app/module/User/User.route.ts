import express from "express";
const Userrouter = express.Router();
import {userController} from "./User.controller"
Userrouter.post('/create-user', userController.createUserController)
Userrouter.get('/login/:email', userController.loginUserController)
Userrouter.get('/all', userController.getAllUsersController)


export default Userrouter;