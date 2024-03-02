import mongoose, { Schema } from "mongoose";
import { IComment } from "./Comment.inferface";

const CommentScheema = new Schema<IComment>({
    message : {
        type :String,
        required : true
    },
    rating : {
        type : Number,
        required : true,
        default : 5
    },
    productId : {
        type : Schema.Types.ObjectId,
        ref : 'product',
        required : true
    },
    email : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

export const CommentModel = mongoose.model('comment',CommentScheema)