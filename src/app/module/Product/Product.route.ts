import express from "express"
import { productController } from "./Product.controller";

const productRouter = express.Router();

productRouter.post('/create',productController.createProductController)
productRouter.get('/single/:id',productController.getSingleProductController)
productRouter.get('/features',productController.getFeaturesProductController)
productRouter.get('/shop',productController.getShorterProductController)
productRouter.get('/category/:id',productController.getSingleCategoryProductsController)
productRouter.get('/search/:search',productController.getProductBySearchingController)


export default productRouter;