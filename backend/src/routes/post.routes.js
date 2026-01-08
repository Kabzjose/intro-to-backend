
import { Router } from "express";
import { createPost,getPosts,updatePost,deletePost } from "../controller/post.controler.js";

const router = Router();
router.post("/create", createPost);
router.get("/getPosts", getPosts);
router.patch("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);

export default router;