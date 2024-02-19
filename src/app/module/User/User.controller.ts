import express,{Request,Response,NextFunction} from "express"
import { Iuser } from "./User.interface"
import { userServices } from "./User.service";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken"
import { config } from "../../../../config";
const createUserController = async(req:Request,res:Response,next:NextFunction) : Promise<Iuser | any> =>{
    try {
        const userData:Iuser = req.body;
        console.log(userData,'nowwww')
        const result = await userServices.createUserService(userData);
        console.log(result,'rresult')
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}


const loginUserController = async(req:Request,res:Response,next:NextFunction): Promise<Iuser | any> =>{
    try {
        const email :string = req.params.email;
        const result = await userServices.loginUserService(email);
        const userinfo = {email : result[0].email, role : result[0].role};
       
        const accesstoken = await jwt.sign(userinfo, config.accesstoken as string , {expiresIn : config.expire})
       
      
       
        res.status(StatusCodes.OK).send({
            data : true,
            result,
            accesstoken
        })
        
    } catch (error) {
        next(error)
    }
}


const getAllUsersController = async(req:Request,res:Response ,next:NextFunction): Promise<Iuser | any> =>{
    try {
        const result = await userServices.getAlluserService();
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}

export const userController = {
    createUserController,loginUserController,getAllUsersController
}