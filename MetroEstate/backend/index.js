import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import userRouter from "./routes/userRoutes.js"
dotenv.config()

let port = process.env.PORT || 5000
let app = express()

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// mount the user router at /api so its internal /signUp route becomes /api/signUp
app.use("/api", userRouter);

app.listen(port,()=>{
    connectDb()
    console.log("Server started");
    
})