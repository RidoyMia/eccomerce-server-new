import express from "express";
const Userrouter = express.Router();
import {userController} from "./User.controller"
Userrouter.post('/create-user', userController.createUserController)
Userrouter.post('/login/:email', userController.loginUserController)
Userrouter.get('/:email', userController.getSingleUserController)
Userrouter.get('/all', userController.getAllUsersController)


export default Userrouter;