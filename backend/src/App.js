import express from 'express';

const app = express();//create an express app

app.use(express.json());//middleware to parse json

//import routes
import userRoutes from './routes/user.routes.js';

//routes declaration
app.use("/api/v1/users" , userRoutes);
//exampl http://localhost:3000/api/v1/users/register
export default app