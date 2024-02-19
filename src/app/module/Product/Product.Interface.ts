import { Types } from "mongoose";

export interface Iproduct {
    name : string,
    brand : string,
    oldPrice : number,
    discount : number,
    details : string,
    title : string,
    image : string,
    author : Types.ObjectId,
    price : number

}