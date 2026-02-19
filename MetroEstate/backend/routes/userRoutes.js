import express from "express"
import { SignUp } from "../controllers/authController.js"

const userRouter = express.Router()
userRouter.post("/signUp", SignUp)

export default userRouter