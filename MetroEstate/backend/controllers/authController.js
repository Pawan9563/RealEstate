import genToken from "../config/token.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const SignUp = async(req,res)=>{
    try{
        let {name,email,password,phone,role} = req.body;
        let userExist = await User.findOne({email});
        if (userExist){
            return res.status(400).json({message : "User already exists"}); 
        }
        let hashedPass = await bcrypt.hash(password,10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPass,
            phone,
            role
        });

        const token  = genToken(newUser._id);

        res.cookie("token",token,{
            httpOnly:true,
            maxAge : 7*24*60*60*1000,
            sameSite: "strict",
            secure : process.env.NODE_ENVIRONMENT === "production"
        })
        
        return res.status(201).json({message: "User created",userId : newUser._id});
    }
    catch(error){
        return res.status(500).json({message:"SignUp failed",error:error.message})
        
    }
}

export const Logout = (req,res)=>{
    try{
        res.clearCookie("token")
        return res.status(200).json({message:"Logout successful"})
    }
    catch(error){
        return res.status(500).json({message:"Internal error"})
    }
}