import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getPosts,
} from "../controllers/postController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getPosts);
router.post("/create", authenticateToken, createPost);
router.patch("/:postID/edit", authenticateToken, editPost);
router.delete("/:postID/delete", authenticateToken, deletePost);

export default router;
