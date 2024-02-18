import dotend from "dotenv"
import path from "path"
dotend.config({path : path.join(process.cwd(),'.env')})


export const config = {
    database : process.env.DATABASE,
    port : process.env.PORT,
    expire : process.env.EXPIRE,
    accesstoken : process.env.ACCESSTOKEN
}