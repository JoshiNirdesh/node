const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

http.createServer((req,res)=>{
    fs.readFile("../html/form.html","utf-8",(err,data)=>{
        if(err){
            res.writeHead(500,{"content-type":"text/html"});
            res.write("Internal Server Error");
            res.end()
        }
        if(req.url=="/"){
            res.writeHead(200,{"content-type":"text/html"});
            res.write(data);
            res.end();
        }
        if(req.url == "/submit"){
            let dataBody = [];
            req.on('data',(chunk)=>{
                dataBody.push(chunk);
            })
            req.on("end",()=>{
                let rowData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rowData);
                let data = `Name : ${readableData.name} Email : ${readableData.email}`;
                fs.writeFileSync("../file/"+readableData.name+".txt",data);
                console.log("File Created ")
            })
            res.end("Data Submitted Sucessfully")
        }
    })
}).listen(4000);