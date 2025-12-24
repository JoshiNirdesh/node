// console.log("Apple 1");
// setTimeout(()=>{  
// console.log("Apple 2");
// },2000)
// console.log("Apple 3");

const fs = require("fs");
// let data = fs.readFileSync("../file/hari.txt","utf-8");
fs.readFile("../file/hari.txt","utf-8",(err,data)=>{
    if(err){
        res.write("Internal server error");
    }
    console.log(data);

})
// console.log(data);

console.log("End")