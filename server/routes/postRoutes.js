import express from "express";
import {
  createPost,
  editPost,
  getPosts,
} from "../controllers/postController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getPosts);
router.post("/create", authenticateToken, createPost);
router.patch("/edit", authenticateToken, editPost);

export default router;
