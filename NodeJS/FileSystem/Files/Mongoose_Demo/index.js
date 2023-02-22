const mongoose =require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/seriesDB')
.then(()=> console.log("Connecttion Open"))
.catch((err)=> console.log("Connection failed",err));

const seriesSchema= new mongoose.Schema({
    name: String,
    date: Number,
    ratings: Number,
    isWatched :Boolean
})

    const Serie=mongoose.model('Serie',seriesSchema)
     // technically models is a class
const friends=new Serie({name:"friends reunion",date:2018,ratings:8.5,isWatched:true})
console.log(friends)
friends.save()
.then(()=> console.log("data is stored in db"))
