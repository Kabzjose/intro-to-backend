import { Post } from "../models/post.model.js";

//create post
const createPost= async(req,res)=>{
    try {
   const {name,description,age}=req.body;

   if(!name|| !description|| !age){
    return res.status(400).json({message:"All fields are required"})
   }
   const post=await Post.create({name,description,age});
   return res.status(201).json({
    message:"Post created successfully",
    post
   });
    }catch (error) {
        console.error("Error creating post:", error);
         res.status(500).json({message:"internal server error",
             
            });
    }
}

export {createPost};