import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
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

//hashing password before saving to database
userSchema.pre("save", async function () {
    if(!this.isModified("password")) return ; //if password is not modified we dont hash again
        
       this.password= await bcrypt.hash(this.password,10); 
         
    
});
//method to compare password during login
userSchema.methods.comparePassword= async function (Password) {
    return await bcrypt.compare(Password,this.password);
}

export const User= mongoose.model("User",userSchema);