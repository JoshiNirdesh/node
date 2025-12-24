const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

http.createServer((req,res)=>{
    fs.readFile("../html/form.html","utf-8",(err,data)=>{
        if(err){
            res.writeHead(500,{"content-type":"text/plain"});
            res.write("Internal Server Error");
            res.end();
        }
        if(req.url=="/"){
            res.writeHead(200,{"content-type":"text/html"});
            res.write(data);
            res.end();
        }
        if(req.url=="/submit"){
            let dataBody = [];
            req.on("data",(chunk)=>{
                dataBody.push(chunk);
            })
            req.on("end",()=>{
                let rowData = Buffer.concat(dataBody).toString();
                console.log(rowData);
                let readableData = queryString.parse(rowData);
                console.log(readableData);
                let data = `Name : ${readableData.name} and email : ${readableData.email}`
                fs.writeFileSync("../file/"+readableData.name +".txt",data);
                res.writeHead(200,{"content-type":"text/html"});
                res.end("Submitted")

            })
        }
        
    })
}).listen(4000);
