import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Get Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  console.log("GET METHOD OF GET USERS");
};

// Newer Model for registering new user
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

  const token = jwt.sign(
    {
      id: existingUser._id,
      email: existingUser.email,
    },
    "process.env.SECRET_KEY",
    { expiresIn: "1h" }
  );

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
export const updateUser = async (req, res) => {
  const userId = req.user.id;
  const { name, bio, password } = req.body;

  const user = await User.findById(userId);
};
