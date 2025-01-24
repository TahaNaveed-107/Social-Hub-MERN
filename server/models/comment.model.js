import mongoose from "mongoose"

const { Schema } = mongoose;

const commentSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    text:{
        type: String,
        required: true,
        maxlength: 300
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set the creation date
      },
    },
    { timestamps: true }
)