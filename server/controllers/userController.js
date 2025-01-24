import User from "../models/user.model";

// Get Users
export const getUsers = async (req, res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Register Users
export const registerUser = async (req,res)=>{
    const {name, email, password} = req.body
    try {
        const newUser = new User({name, email, password});
        await newUser.save();
        res.status(201).json({newUser})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

