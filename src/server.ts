import mongoose from "mongoose"
import app from "./app"
import { config } from "../config"

async function bootstrap() {
    try {
        mongoose.connect(config.database as string)
        app.listen(config.port,()=>{
            console.log(`connected as port ${config.port}`)
        })
    } catch (error:any) {
        console.log(error.message)
    }
}
bootstrap()