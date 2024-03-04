import express from "express"
import { cardProductController } from "./Card.controller"
const cardRouter = express.Router()

cardRouter.post('/create',cardProductController.addedToCardController)
cardRouter.delete('/:id',cardProductController.RemoveToCardController)
cardRouter.get('/single/:id',cardProductController.getCardIteamsSingleController)
cardRouter.get('/user/:email',cardProductController.getAllCardIteamsController)


export default cardRouter;
