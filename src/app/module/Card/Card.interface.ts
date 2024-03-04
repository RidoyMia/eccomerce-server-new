import { Types } from "mongoose";

export interface ICard {
    productId : Types.ObjectId;
    email : string
}