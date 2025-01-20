import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema =  new Schema({
    name: {
        required: true,
        type: String,
    },
    age: {
        required: true,
        type: Number,
    },
})

export default mongoose.model("User", userSchema)