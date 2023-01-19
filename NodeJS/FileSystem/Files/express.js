/* set up using express */  // npx nodemon express.js

const express= require('express');
const app=express();
const port =5000;
// app.use((req,res)=>{
//     // console.log("server running")
//     res.send("server running")
// })

app.get('/',(req,res)=>{
    res.send(`<h1>Hello Akansha Kansal, Welcome to Express</h1>`)
})

//  Routing: each unique request creates a unique response.

app.get('/r/:subreddit',(req,res)=>{
    console.log(req.params);
    const {subreddit} = req.params;
    res.send(`you are watching ${subreddit} subreddit`)
})

app.get('/search',(req,res)=>{
    // console.log(req.query)
    // res.send(`<h1>Welcome To GLA University.</h1>`)
    const {q}=req.query;
    res.send(`jai shree ram from ${q}`);
})

app.get('*',(req,res)=>{
    res.send(`<h1>you are at wrong page!</h1>`)
})



app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});           
