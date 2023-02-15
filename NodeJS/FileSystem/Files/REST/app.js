const express=require("express");
const app=express();
const path=require("path");

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const comments=[
    {
        id:1,
        user: "Akansha",
        characteristics:"good"
    },
    {
        id:2,
        user: "Megha",
        characteristics:"Best sister"
    },
    {
        id:3,
        user: "Avi",
        characteristics:"Best brother"
    },
    {
        id:4,
        user: "Aman",
        characteristics:"Good Brother"
    }  
]

// app.get('/home',(req,res)=>{
//     res.render('index',(comments))
// })

app.get('/comments',(req,res)=>{
    res.render('index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('new')
})

// app.post()

app.listen(5000,()=>{
    console.log("server is running at port 5000")
})
