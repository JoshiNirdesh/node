import express from "express";
import path from "path";

const absPath = path.resolve("view");
const app = express();
const publicPath = path.resolve("public");

app.use(express.static(publicPath));

app.get("/",(req,res)=>{
    res.sendFile(absPath+"/home.html");
})

app.get("/about",(req,res)=>{
    res.send(absPath+'about.html');
})

app.get("/login",(req,res)=>{
    res.send(absPath+'login.html');
})
app.listen(4000);