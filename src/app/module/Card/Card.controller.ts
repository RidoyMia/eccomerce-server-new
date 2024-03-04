import express,{Request,Response,NextFunction} from "express"
import { ICard } from "./Card.interface"
import { CardServices } from "./Card.service";
import { StatusCodes } from "http-status-codes";

const addedToCardController = async(req:Request,res:Response,next:NextFunction):Promise<ICard | any> =>{
    try {
        const data : ICard = req.body;
        console.log(data,'card data to my new')
        const result = await CardServices.addedToCard(data);
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}
const RemoveToCardController = async(req:Request,res:Response,next:NextFunction):Promise<ICard | any> =>{
    try {
        const id = req.params.id;
        const result = await CardServices.removeToCard(id);
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}
const getCardIteamsSingleController = async(req:Request,res:Response,next:NextFunction):Promise<ICard | any> =>{
    try {
        const id:string = req.params.id;
        const result = await CardServices.getCardIteamsSingle(id);
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}
const getAllCardIteamsController = async(req:Request,res:Response,next:NextFunction):Promise<ICard | any> =>{
    try {
        const email = req.params.email;
        const result = await CardServices.getAllCardIteams(email);
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}

export const cardProductController = {
    addedToCardController,RemoveToCardController,getCardIteamsSingleController,getAllCardIteamsController
}