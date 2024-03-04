import express, { Application,Request,Response,NextFunction, request, response } from "express"
import cors from "cors"
import { StatusCodes } from "http-status-codes"
import Userrouter from "./app/module/User/User.route"
import { GlobalError } from "./globalError/GlobalError"
import categoryRouter from "./app/module/Category/Category.route"
import productRouter from "./app/module/Product/Product.route"
import cardRouter from "./app/module/Card/Card.route"
const app:Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/api/v1/user", Userrouter)
app.use("/api/v1/user", Userrouter)
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/card", cardRouter)

app.get('/',(req:Request,res:Response)=>{
 res.status(StatusCodes.OK).send({
    data : true,
    result : 'this is main root of sharing data'
 })
})

app.use(GlobalError)

app.use((req:Request,res:Response,next:NextFunction)=>{
    res.status(StatusCodes.NOT_FOUND).send({
        data : false,
        message : 'Not-Found',
        result : {},
        errorMessage : {
            path : req.originalUrl,
            message : 'Not-found'
        }
    })
})

export default app;