import express from "express";
import { getUsers, registerUser } from "../controllers/userController";

const router = express.Router();

router.get("/", getUsers); // Route to get All Users
router.post("/register", registerUser); // Route to Register User

export default router;