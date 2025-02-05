import express from "express";
import {
  getUsers,
  registerUser,
  loginUser,
  updateUser,
} from "../controllers/userController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getUsers); // Route to get All Users
router.post("/register", registerUser); // Route to Register User
router.post("/login", loginUser); // Route to Login User
router.post("/update", authenticateToken, updateUser);

export default router;
