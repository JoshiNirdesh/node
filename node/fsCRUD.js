const fs = require("fs");

fs.writeFileSync("../file/ram.txt","This is ram. ");

// fs.unlinkSync("../file/ram.txt");

    var data = fs.readFileSync("../file/ram.txt","utf-8");
    console.log(data);

    fs.appendFileSync("../file/ram.txt","I am 10 years old");

    var data = fs.readFileSync("../file/ram.txt","utf-8");
    console.log(data);
