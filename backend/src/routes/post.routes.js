
import { Router } from "express";
import { createPost,getPosts,updatePost } from "../controller/post.controler.js";

const router = Router();
router.post("/create", createPost);
router.get("/getPosts", getPosts);
router.patch("/update/:id", updatePost);

export default router;