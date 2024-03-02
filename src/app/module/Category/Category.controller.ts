import express, { NextFunction,Request,Response } from "express"
import { ICategory } from "./Category.interface"
import { CategoryServices } from "./Category.service";
import { StatusCodes } from "http-status-codes";

const CreateCategoryController = async(req:Request,res:Response,next:NextFunction):Promise<ICategory | any> =>{
    try {
        // const categoryInfo : ICategory = req.body;
        const result = await CategoryServices.CreateCategoryService();
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}

const getAllCategoryController = async(req:Request,res:Response,next:NextFunction):Promise<ICategory | any> =>{
    try {
        const result = await CategoryServices.getAllCategoryService();
        res.status(StatusCodes.OK).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}


export const CategoryController = {
    CreateCategoryController,getAllCategoryController
}