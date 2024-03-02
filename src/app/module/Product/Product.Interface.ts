import { Types } from "mongoose";

export interface Iproduct {
    name : string,
    brand : string,
    oldPrice : number,
    discount : number,
    details : string,
    title : string,
    quantity : number,
    image : string,
    sellerid : Types.ObjectId,
    price : number,
    CategoryId : Types.ObjectId

}