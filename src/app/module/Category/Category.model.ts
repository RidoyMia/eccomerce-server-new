import express from "express"
import mongoose, { Schema } from "mongoose"
import { ICategory } from "./Category.interface"

const CategoryScheema = new Schema<ICategory>({
    name : {
        type : String,
        required : true,
        unique : true
    },
    img : {
        type : String,
        required : true
    },
    id: {
        type : Number,
        required : true,
        unique : true
    }
})


export const CategoryModel = mongoose.model('Category',CategoryScheema)