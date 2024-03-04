import { ICard } from "./Card.interface";
import { CardModel } from "./Card.model";

const addedToCard = async(data : ICard) : Promise<ICard | any> =>{
  const findingData = await CardModel.find({productId : data?.productId});
  if(findingData.length > 0){
    return {message : 'Already added'}
  }
  const result = await CardModel.create(data);
  return result
}

const removeToCard = async(id : string) : Promise<ICard | any> =>{
    const result = await CardModel.deleteOne({_id : id});
    return result
  }


  const getCardIteamsSingle = async(id : string) : Promise<ICard | any> =>{
    const result = await CardModel.find({_id :id});
    return result
  }

  const getAllCardIteams = async(email : string) : Promise<ICard[] | any> =>{
    const result = await CardModel.find({email : email});
    return result
  }



  export const CardServices = {
    addedToCard,removeToCard,getCardIteamsSingle,getAllCardIteams
  }