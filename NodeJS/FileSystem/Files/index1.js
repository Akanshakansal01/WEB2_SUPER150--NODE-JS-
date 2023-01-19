// const fs=require("fs");
// const path=require('path');
// console.log(path.join(__dirname,'Files','/inp1.txt'));
// console.log(process.cwd());
// const p1=path.join(__dirname,'Files','/inp1.txt');
// const p2= path.join(__dirname,'Files','/inp2.txt');
// console.log(p1);
// let arr1=[];
// let arr2=[];
// let ans=[];
// fs.readFile(p1,(err,data)=>
// {
//     if(err) throw err;
//     arr1=data.toString().split('\r\n');
//     ans.push(...arr1);
//     console.log(ans);
//     fs.readFile(p2,(err,data)=>
//     {
//         if(err) throw err;
//         arr2=data.toString().split('\r\n');
//         ans.push(...arr2);
//         console.log(ans);
//         ans.sort((a,b)=>(a-b)).join('\n');
//     })
//     // fs.writeFile('output.txt',ans,(err)=>{
//     //     if(err) throw err;
//     //     console.log("file written succesfully")
//     // })
// })


