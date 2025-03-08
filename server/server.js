import express from "express";
import connectDB from "./config/connection.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://192.168.10.31:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World from Express JS");
});

app.use("/user", userRoutes);
app.use("/post", postRoutes);

const PORT = process.env.PORT;
connectDB();
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
