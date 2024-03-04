import mongoose, { Schema } from "mongoose";
import { ICard } from "./Card.interface";

const CardScehma = new Schema<ICard>({
    productId : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'product'
    },
    email : {
        type : String,
        required : true
    }
},{
    timestamps : true
})


export const CardModel = mongoose.model('card', CardScehma)