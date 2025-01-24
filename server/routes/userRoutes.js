import express from "express";
import { getUsers, registerUser, loginUser } from "../controllers/userController.js";
import authneticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getUsers); // Route to get All Users
router.post("/register", registerUser); // Route to Register User
router.post("/login", loginUser, authneticateToken); // Route to Login User

export default router;