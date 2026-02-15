import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/db.js"
dotenv.config()

let port = process.env.PORT || 5000
let app = express()

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use(cors())
app.use(express.json())

app.listen(port,()=>{
    connectDb()
    console.log("Server started");
    
})