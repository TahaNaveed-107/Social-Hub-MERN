import express from "express";
import connectDB from "./config/connection.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Express JS");
});

app.use("/users", userRoutes);

const PORT = process.env.PORT;
connectDB();
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
  // console.log(`${process.env.MONGODB_URI}`);
});
