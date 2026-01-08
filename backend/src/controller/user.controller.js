import { User } from "../models/user.model.js";

//console.log("REGISTER HIT", req.body);

const registerUser= async (req,res) =>{
    try{
        const {username,email,password}= req.body;
        //basic validation
        if(!username || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        //check for existing user
        const existing=await User.findOne({email:email.toLowerCase()});
        if(existing){
            return res.status(400).json({message:"User already exists"});
        }
        //create new user
        const user= await User.create({
            username,
            email: email.toLowerCase(),
            password,
            loggedIn:false,
        })
        res.status(201).json({message:"User registered successfully", userId:user._id,
            email:user.email,username:user.username
        });
    }catch(error){
        console.error("REGISTER ERROR:", error);
         res.status(500).json ({message:"Server error"})
    }
}
const logInUser= async (req,res) =>{
    try{
        //checking for existing user
        const {email,password}=req.body;
        const user =await User.findOne({
            email:email.toLowerCase(),

        })
        if (!user) return res.status(400).json({message:"User not found"});
 
        //checking password
        const isMatch=await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({message:"Invalid credentials"})
        res.status(200).json({
    message:"Login successful",
    id:user._id,
    email:user.email,
    username:user.username
});
    }catch(error){  
        console.error("REGISTER ERROR:", error);
        res.status(500).json({message:"Server error",
    error:error.message
        });
}
}
export {registerUser, logInUser};
