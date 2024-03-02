import { CategoryModel } from "../Category/Category.model";
import { Iproduct } from "./Product.Interface";
import { ProductModel } from "./Product.model";

const createProductServices = async(data : Iproduct) : Promise<Iproduct | any> =>{
    const result = await ProductModel.create(data); 
    return result
}
const getSingleProductService = async(id : string) : Promise<Iproduct | any> =>{
    const result = await ProductModel.find({_id : id});
    return result
}
const getProductByCategory = async(id:string) : Promise<Iproduct[] | any> =>{
    const result = await ProductModel.find({CategoryId : id});
    return result
}

const getFeaturesProductService = async():Promise<Iproduct[] |  any>=>{
    const result = await ProductModel.find({}).sort({createdAt : -1,discount : -1}).limit(12);
    return result;
}

    
  

    
    


const getShorterProductService = async (options: any): Promise<Iproduct[] | any> => {
    try {
        const { page = 1, search = '', category, sort = 'asc' } = options;
        const gettingCategory = await CategoryModel.find({name : category});
        const skip =( parseInt(page) -1) * 10
        const resultt = await ProductModel.find({ CategoryId : gettingCategory[0]?._id}).sort({price : sort}).skip(skip).limit(10).populate('CategoryId');
        return resultt;
    } catch (error) {
        console.error('Error:', error);
        return { error: 'An error occurred' };
    }
}




export const productServices = {
    createProductServices,getSingleProductService,getProductByCategory,getFeaturesProductService,getShorterProductService
}