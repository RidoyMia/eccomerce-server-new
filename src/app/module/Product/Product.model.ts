import mongoose, { Schema } from "mongoose";
import { Iproduct } from "./Product.Interface";

const productSchema = new Schema<Iproduct>({
    name : {
        type : String,
        required : true,

    },
    brand : {
        type : String,
       
        default : 'no-brand'
    },
    oldPrice : {
        type : Number,
        required : true
    },
    discount : {
        type : Number,
        required : true
    },
    details : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    sellerid : {
        type : Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    CategoryId :  {
        type : Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    },
},{
    timestamps : true
})


export const ProductModel = mongoose.model('product',productSchema)