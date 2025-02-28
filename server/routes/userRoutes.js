import express from "express";
import {
  getUsers,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getUsers); // Route to get All Users
router.post("/register", registerUser); // Route to Register User
router.post("/login", loginUser); // Route to Login User
router.patch("/edit", authenticateToken, updateUser);
router.delete("/delete", authenticateToken, deleteUser);

export default router;
