import express from "express";
import mongoose from "mongoose";
import studentModel from "./model/studentModel.js";

const app = express();
app.use(express.json())

await mongoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("DataBase Connected ")
})

app.get("/",async(req,res)=>{
    const studentData = await studentModel.find();
    res.send(studentData);
})

app.post("/save",async(req,res)=>{

    const studentData = await studentModel.create(req.body);
    res.send({
        message: "Data stored",
        success:true,
        stored:studentData
    })
})
app.put("/update/:id",async (req,res)=>{
    const id =req.params.id;
    const studentData = await studentModel.findByIdAndUpdate(id,{...req.body});
    res.send({
        message:"Data updated",
        success:true,
        Stored:studentData,
    })

})
app.listen(4000);