import fs from 'fs';
fs.readFile('data.tex','utf8',(err,data)=>
{
    function(err){
        console.log(err);
        return;
    }
    console.log(data);
});


// writefile
// import fs from 'fs';
// fs.writeFile('data.tex',"hello world",(err)=>
// {
//          if(err){
//         console.log(err);
//         return;
//     }
//     console.log("file written succefuly");
// });

// appendfile
import fs from 'fs';
fs.appendFile("data.txt","\n hai zoople",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file append successfully");
});
