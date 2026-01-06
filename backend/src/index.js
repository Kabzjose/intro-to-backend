import dotenv from 'dotenv';
dotenv.config({
    path:"./.env"
});
import connectDB from '../config/database.js';
import app from './App.js';


const startServer = async () =>{
    try{
        await connectDB();
        app.on("error",(error) =>{
            console.log("Error",error);
            throw error;
        });

        app.listen(process.env.PORT|| 8000,()=>{
            console.log(`server running on port:
                ${process.env.PORT}`)
        })
    }catch(error){
      console.log("mongoDB connection failed",error);
      process.exit(1);
    }

}

startServer();