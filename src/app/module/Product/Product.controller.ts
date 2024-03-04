
import express,{Request,Response,NextFunction} from "express"
import { Iproduct } from "./Product.Interface"
import { productServices } from "./Product.services";
import { StatusCodes } from "http-status-codes";


const createProductController = async(req:Request,res:Response,next:NextFunction) : Promise<Iproduct | any> =>{
    try {
        const data : Iproduct = req.body;
        const result = await productServices.createProductServices(data);
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}

const getSingleProductController = async(req:Request,res:Response,next:NextFunction) : Promise<Iproduct | any> =>{
    try {
        const id:string = req.params.id;
        const result = await productServices.getSingleProductService(id);
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}

const getSingleCategoryProductsController = async(req:Request,res:Response,next:NextFunction) : Promise<Iproduct | any> =>{
    try {
        const id:string = req.params.id;
        const result = await productServices.getProductByCategory(id);
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}

const getFeaturesProductController = async(req:Request,res:Response,next:NextFunction) : Promise<Iproduct | any> =>{
    try {
        const result = await productServices.getFeaturesProductService();
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}
const getShorterProductController =async(req:Request,res:Response,next:NextFunction) : Promise<Iproduct | any> =>{
    try {
        const options : any = req.query;
        console.log(options,'options');
        const result = await productServices.getShorterProductService(options);
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}

const getProductBySearchingController = async(req:Request,res:Response,next:NextFunction) : Promise<Iproduct | any> =>{
    try {
        const search:any = req.params.search;
        console.log(search,'searching')
        const result = await productServices.searchingProductServices(search);
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}


export const productController = {
    createProductController,getSingleProductController,getSingleCategoryProductsController,getFeaturesProductController,getShorterProductController,getProductBySearchingController
}