import { Router } from "express";
import { registerUser,logInUser } from "../controller/user.controller.js"; 
const router= Router();


router.post("/register", registerUser);
router.post("/login", logInUser);



export default router;