import express from "express";
import { createPost, getPosts } from "../controllers/postController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getPosts);
router.post("/create", createPost);

export default router;
