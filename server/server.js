import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
app.use(express.json());


app.get('/', (req,res)=>{
    res.send("Hello World from Express JS");
})




connectDB();
const port = 3005;
app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})