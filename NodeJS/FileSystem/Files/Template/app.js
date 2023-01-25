const express=require("express");
const app=express();
const path=require("path");

app.set('view engine','ejs');

const todos=[
    "playing football",
    "reading books",
    "cooking ",
    "classical dance"
]
app.get('/home',(req,res)=>{
    const randomNumber=Math.floor(Math.random()*10);
    res.render('index',{randomNumber})
})

app.get('/todos',(req,res)=>{
    res.render('todos',{todos})
})

app.use(express.static(path.join(__dirname,'public')))

app.set('views',path.join(__dirname,'views'))

app.listen(3000,()=>{
    console.log("server running");
})