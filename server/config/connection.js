import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {
    try {
        const connection  =  await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("Connected to mongo DB Successfully")
    } catch (error) {
        console.log("Connection Failed: " ,error.message)
        process.exit(1)
    }
}

export default connectDB;