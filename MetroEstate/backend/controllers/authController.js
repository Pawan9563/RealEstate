import genToken from "../config/token";
import User from "../models/userModel";

export const signUp = async(req,res)=>{
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
        return res.status(201).json({message: "User created",userId : newUser._id});
    }
    catch(error){
        res.status(500).json({message:"SignUp failed",error:error.message})
        
    }
}