const express=require("express");
const app=express();
const path=require("path");

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// middleware
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('index')
})

// app.get('/user',(req,res)=>{
//     res.send('get request received')
// })

app.post('/user',(req,res)=>{
    res.send('post request received')
})

app.listen(5000,()=>{
    console.log("server is running at port 5000")
})