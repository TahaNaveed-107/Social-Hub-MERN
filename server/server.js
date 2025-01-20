import express from 'express';
import connectDB from "./model/connection.js";
import User from "./model/user.modal.js"

const app = express();
app.use(express.json());

const port = 3005;

app.get('/', (req,res)=>{
    res.send("Hello World from Express JS");
})

app.get('/about', (req,res)=>{
    res.send("Hello World from About Page");
})
k
app.get('/contact', (req,res)=>{    
    res.send("Hello World from Contact Page");
})

app.get('/services', (req,res)=>{
    res.send("Hello World from Services Page");
})


connectDB();

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})