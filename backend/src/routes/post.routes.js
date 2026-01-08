
import { Router } from "express";
import { createPost } from "../controller/post.controler.js";

const router = Router();
router.post("/create", createPost);


export default router;