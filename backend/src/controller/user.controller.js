import { User } from "../models/user.model";

const registerUser= async (req,res) =>{
    try{
        const {usernane,email,password}= req.body;
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
         res.satus(500).json ({message:"Server error"})
    }
}
export {registerUser};
