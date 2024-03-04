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
const getProductByCategory = async(name:string) : Promise<Iproduct[] | any> =>{
    const gettingCategory = await CategoryModel.find({name : name});
    const result = await ProductModel.find({ CategoryId : gettingCategory[0]?._id}).populate('CategoryId');
    return result
}

const getFeaturesProductService = async():Promise<Iproduct[] |  any>=>{
    const result = await ProductModel.find({}).sort({createdAt : -1,discount : -1}).limit(12);
    return result;
}

    
  

    
    


const getShorterProductService = async (options: any): Promise<Iproduct[] | any> => {
    try {
        const { page = 1, search = '', category ='', sort = 'asc' } = options;
        const skip =( parseInt(page) -1) * 10;
        
        if(category.length > 1){
            
            const gettingCategory = await CategoryModel.find({name : category});
            const result = await ProductModel.find({ CategoryId : gettingCategory[0]?._id}).sort({price : sort}).skip(skip).limit(10).populate('CategoryId');
            const total = await ProductModel.countDocuments({ CategoryId : gettingCategory[0]?._id})
            console.log(total,'len')
            return {
                result,
                total 
            };
        }
        else{
           
            
            const result = await ProductModel.find({ }).sort({price : sort}).skip(skip).limit(10).populate('CategoryId');
            const total = await ProductModel.countDocuments({})
            return {
                result,
                total
        };
        }
            
       
       
    } catch (error) {
        console.error('Error:', error);
        return { error: 'An error occurred' };
    }
}

const searchingProductServices = async(search : string) : Promise<Iproduct [] | any> =>{
    const andConditions = [
        {
            $or : [
                {
                    name : {
                        $regex : search,
                        $options : 'i'
                    }
                },{
                    title : {
                        $regex : search,
                        $options : 'i'
                    }
                }
            ]
        },{
            
                details : {
                    $regex : search,
                    $options : 'i'
                }
            
        }
    ]
    const result = await ProductModel.find({ $and : andConditions});
    return {result,total : result?.length}
}


export const productServices = {
    createProductServices,getSingleProductService,getProductByCategory,getFeaturesProductService,getShorterProductService,searchingProductServices
}