const http = require("http");

const arg = process.argv;
const port = arg[2];
http.createServer((req,res)=>{

    res.end();
}).listen(port);