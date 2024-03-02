import express from "express"
import { productController } from "./Product.controller";

const productRouter = express.Router();

productRouter.post('/create',productController.createProductController)
productRouter.get('/single/:id',productController.getSingleProductController)
productRouter.get('/features',productController.getFeaturesProductController)
productRouter.get('/shop',productController.getShorterProductController)
productRouter.post('/category/:id',productController.getSingleCategoryProductsController)


export default productRouter;