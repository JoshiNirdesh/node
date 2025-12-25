import express from "express";

const app = express();


function checkRoute(req,res,next){
    console.log(req.url);
    next()
}

app.use(checkRoute);

app.get("/",(req,res)=>{
    res.send("This is the home page");
})
app.get("/user",(req,res)=>{
    res.send("This is the User page");
})
app.get("/products",(req,res)=>{
    res.send("This is the product page");
})
app.listen(3000);