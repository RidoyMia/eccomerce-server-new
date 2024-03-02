import { Types } from "mongoose";

export interface IComment {
    message : string,
    rating : number,
    productId : Types.ObjectId,
    email : string
}