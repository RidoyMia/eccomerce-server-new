import express from "express"
import mongoose, { Schema } from "mongoose"
import { Iuser } from "./User.interface"

const userSchema = new Schema<Iuser>({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,

    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    role : {
        type : String,
        enum : ['user','seller' ,'admin'],
         required : true
    },
  
    district : {
        type : String,
        required : false
    },
    sub_district : {
        type : String,
        required : false
    },
    village :  {
        type : String,
        required : false
    }

},{
    timestamps : true
})


export const userModel = mongoose.model('user',userSchema)