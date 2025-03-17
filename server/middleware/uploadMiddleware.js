import multer from "multer";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "eclipse_posts",
        allowed_formats: ["jpg","png","jpeg","webp"]
    }
})

const uplaod = multer({storage});
console.log(uplaod);
export default uplaod;