const fs=require("fs");
const path=require('path');
console.log(path.join(__dirname,'files','/inp1.txt'));
console.log(process.cwd());
let count=0;
function read(err,data)
{
    count +=1;
    if(count<=2)
    {
        if(!err)
        {
            console.log(data)
        }
        else{
            console.log(err)
        }
        fs.readFile('inp'+(count+1)+'.txt','utf-8',read)
    }
}
fs.readFile('inp1.txt','utf-8',read);