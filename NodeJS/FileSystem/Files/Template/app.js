const express=require("express");
const app=express();
const path=require("path");
app.set('view engine','ejs');

app.get('/home',(req,res)=>{
    res.render('index')
})

app.set('views',path.join(__dirname,'views'))

app.listen(3000,()=>{
    console.log("server running");
})