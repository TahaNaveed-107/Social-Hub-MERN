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
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String
    },
    bio:{
        type:String,
        maxlength:200,
    },
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    follwing:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]

},
{timestamps:true}
)

export default mongoose.model("User", userSchema)