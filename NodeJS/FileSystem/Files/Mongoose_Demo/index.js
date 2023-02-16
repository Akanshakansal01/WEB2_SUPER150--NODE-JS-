const mongoose=require("mongoose");

mongoose.connect('mongodb://126.0.0.1:27011/seriesDB')
.then(()=> console.log("connection open"))
.catch((err) => console.log("connection failed",err));

const seriesSchema= new mongoose.Schema({
    name: String,
    date: Number,
    ratings: Number,
    isWatched :Boolean
})