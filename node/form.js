const http = require("http");

http.createServer((req,res)=>{
    if(req.url =="/"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write (`
        <form action="/submit" method="post">
                Name:
                <input type="text" name="name"><br><br>
                Email:
                <input type="email" name="email"><br><br>
                <button type="submit">Submit</button>
            </form>
        
        `);
        res.end();
    }
    else if (req.url == "/submit"){
        res.write("Data Submitted");
        res.end();
    }
}).listen(4000);