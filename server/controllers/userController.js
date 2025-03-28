import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";
import { generateToken } from "../utils/generateToken.js";

// Get Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Register a new user
export const registerUser = async (req, res) => {
  const { name, email, password, age } = req.body;

  try {
    if (!name || !email || !password || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    // Password Encryption using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      age,
    });

    await newUser.save();

    res.status(201).json({
      message: "New User Registered Successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        age: newUser.age,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// login controller for the user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ message: "Both fields are Required" });
  }

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: `No user Found with this email ${email}` });
  }

  // Compare passwords
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

  if (!isPasswordCorrect) {
    return res
      .status(401)
      .json({ message: "Invalid credentials. Please try again." });
  }

  const token = generateToken(existingUser._id, existingUser.email);

  res.cookie("token", token, {
    httpOnly: true, // Prevents XSS attacks
    secure: process.env.NODE_ENV === "production", // Enables secure cookies in production
    sameSite: "Strict", // CSRF protection
    maxAge: 60*60*60*24, // 1d expiration
  });

  return res.status(200).json({
    message: "Login Successful",
    user: {
      id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
    },
    token: token,
  });
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const userID = req.user.id;

    const { name, bio, password, age } = req.body;

    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (name) user.name = name;
    if (bio) user.bio = bio;
    if (age) user.age = age;
    if (password) {
      user.password = bcrypt.hashSync(password, 10);
    }

    await user.save();

    return res.status(200).json({
      message: "user updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        bio: user.bio,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      errorMsg: error.message,
      error: error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userID = req.user.id;

    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    await Post.deleteMany({ user: userID });
    await Comment.deleteMany({ user: userID });
    await User.findByIdAndDelete(userID);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
