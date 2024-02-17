import express,{Request,Response,NextFunction} from "express"
import { Iuser } from "./User.interface"
import { userServices } from "./User.service";
import { StatusCodes } from "http-status-codes";
const createUserController = async(req:Request,res:Response) : Promise<Iuser | any> =>{
    try {
        const userData:Iuser = req.body;
        const result = await userServices.createUserService(userData);
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).send({
            data :false,
            message : 'something went wrong'
        })
    }
}


const loginUserController = async(req:Request,res:Response): Promise<Iuser | any> =>{
    try {
        const email :string = req.body;
        const result = await userServices.loginUserService(email);
        
        
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).send({
            data :false,
            message : 'something went wrong'
        })
    }
}


export const userController = {
    createUserController,loginUserController
}