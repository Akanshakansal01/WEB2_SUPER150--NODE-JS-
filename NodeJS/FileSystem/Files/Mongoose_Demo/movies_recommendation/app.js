const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017:27017/seriesDB")
.then(()=> console.log("DB CONNECTED!"))
.catch((err)=> console.log(err))

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public","js")))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/search",(req,res)=>{
    res.send("you are on search route");
})

app.listen(5000,()=>{
    console.log("server is running at port 5000.")
})