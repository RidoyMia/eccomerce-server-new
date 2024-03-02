import express from "express";
import { CategoryController } from "./Category.controller";
const categoryRouter = express.Router();

categoryRouter.post('/create',CategoryController.CreateCategoryController)
categoryRouter.get('/all',CategoryController.getAllCategoryController)

export default categoryRouter;