/*  HTTP MODULE IN NODE JS*/ 
const http=require("http");
const server=http.createServer((req,res)=>{

    console.log(req);

    if(req.url==='/home')
    {
        res.statusCode(200);
        res.write(`<h1> Welcome to http Server </h1>`)
        res.end();
                           //              http://localhost:7000/home  ----> consume in server address (Unique Route) 
    }
    else if(req.url==='/contact')
    {
        // res.write("hello world");
        res.write(`<h1> Welcome to Contact page </h1>`)
        res.end();
    }
    else
    {
        // res.write('error! You are at wrong page. ');
        res.end('error! You are at wrong page. ');
    }

})
server.listen(7000);
console.log("server is running on port 7000");


