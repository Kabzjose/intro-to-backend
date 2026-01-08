import { Router } from "express";
import { registerUser,logInUser,logoutUser } from "../controller/user.controller.js"; 
const router= Router();


router.post("/register", registerUser);
router.post("/login", logInUser);
router.post("/logout", logoutUser);




export default router;