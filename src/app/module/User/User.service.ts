import { Iuser } from "./User.interface";
import { userModel } from "./User.model";

const createUserService = async(UserData : Iuser):Promise<Iuser | any> =>{
  const result = await userModel.create(UserData)
  return result;
}
const loginUserService = async(email : string) : Promise<Iuser | any> =>{
    const result = await userModel.find({email : email});
    return result;
}

const getAlluserService = async() : Promise<Iuser | any> =>{
  const result = await userModel.find();
  return result;
}


export const userServices = {
    createUserService,loginUserService,getAlluserService
}