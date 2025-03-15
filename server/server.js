import express from "express";
import connectDB from "./config/connection.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
 
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World from Express JS");
});

app.use("/user", userRoutes, authRoutes);
app.use("/post", postRoutes);
// app.use("/user", authRoutes);

const PORT = process.env.PORT;
console.log("Cloudinary API Key:", process.env.CLOUDINARY_API_KEY);

connectDB();
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
