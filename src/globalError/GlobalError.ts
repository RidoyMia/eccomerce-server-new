import express,{Request,Response,NextFunction} from "express"
import { StatusCodes } from "http-status-codes";
import { MongoServerError } from "mongodb";
export const GlobalError = async(error:any,req:Request,res:Response,next:NextFunction)=>{
   res.status(StatusCodes.BAD_REQUEST).send({
    name : error.name,
    message : error.message
   })

};
