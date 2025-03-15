import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"

dotenv.config();

cloudinary.config({
    cloud_name: "djd8cqhya",
    api_key: "518775421729126",
    api_secret: "BjKTJMwhYM4JuHFjh2aGLlZe9aU",
})

export default cloudinary;