import mongoose,{Schema} from "mongoose";

const userSchema= new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            minlength:1,
            malength:50
        },
        password:{
            type:String,
            required:true,
            minlength:6,
            maxlength:40,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        }
    },
    {
        timestamps:true
    }
)

export const User= mongoose.model("User",userSchema);