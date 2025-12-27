import express from 'express'
import mongoose from "mongoose"
import studentModel from './model/studentModel.js';

const app = express();
app.use(express.json());

await mongoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("Database Connected");
})

app.get("/",async(req,res)=>{
    const studentData = await studentModel.find();
    res.send(studentData);
})
app.post("/save",(req,res)=>{
    const {name,age,email}=req.body;
    if(!req.body || !name || !age ||!email){
        res.send({ 
        message:"data not Stroed",
        success :false,
        storedData : null})

        return false
    }
    
    
    const studentData = studentModel.create(req.body);
    res.send({
        message:"data Stroed",
        success :true,
        storedData : req.body
    })
})
app.listen(4000);