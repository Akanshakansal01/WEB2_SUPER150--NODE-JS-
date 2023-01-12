const fs=require("fs");
// console.log(fs);
// fs.readFile('q1.html',{
//     encoding:'utf-8',
//     flag:'r'
// },(err,data)=>{
//     if(!err)
//     {
//         console.log(data)
//     }
//     else
//     {
//         console.log(err)
//     }
// })

// file read one by one

// let count=0;
// function cb(err,data)
// {
//     count +=1;
//     if(count<=3)
//     {
//         if(!err)
//         {
//             console.log(data)
//         }
//         else{
//             console.log(err)
//         }
//         fs.readFile('q'+(count+1)+'.html','utf-8',cb)
//     }
// }
// fs.readFile('q1.html','utf-8',cb)


// parellely read files

// function cb(err,data)
// {
//     if(!err)
//     {
//         console.log(data)
//     }
//     else{
//         console.log(err)
//     }
// }
// for(let i=1;i<=3;i++)
// {
//     fs.readFile('q'+i+'.html','utf-8',cb)
// }


const path=require('path');
console.log(path.join(__dirname,'files','/q1.html'));  //  name of directory in which file is made
console.log(process.cwd()); // gives current working directory