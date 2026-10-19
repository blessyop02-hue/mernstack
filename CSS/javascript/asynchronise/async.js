// function downloadFile() {
//     return new Promise(function(resolve,reject){
//         let downloadSuccess=true;
//         console.log("file downloading...");
//         setTimeout(function(){
//             if (downloadSuccess){
//                 resolve("file downloaded successfully");

//             }else{
//                 reject("file download failed");
//             }
//         },2000);
//     });
// }

// function processFile(fileName){
//     return new Promise(function(resolve,reject){
//         let processSuccess=true;
//         console.log("processing " + fileName + "...");
//         setTimeout(function(){
//             if(processSuccess){
//                 resolve(fileName + "processed successfully");
//             }
//             else{
//                 reject("file processing failed");
//             }
//         },2000);
//     });
// }

// // downloadFile()
// // .then(function(result){
// //     console.log(result);
// //     console.log("processing file...");
// // })
// // .catch(function(error){
// //     console.log("error");
// // });

// async function startProcess() {
//     let fileName=await downloadFile();
//      let result=await processFile(fileName);
//     console.log(result);
    
// }
// startProcess(); 





function downloadFile() {
    return new Promise(function(resolve,reject){
        let downloadSuccess=true;
        console.log("file downloading...");
        setTimeout(function(){
            if (downloadSuccess){
                resolve("file downloaded successfully");

            }else{
                reject("file download failed");
            }
        },2000);
    });
}

function processFile(fileNamew){
    return new Promise(function(resolve,reject){
        let processSuccess=true;
        console.log("processing " + fileName + "...");
        setTimeout(function(){
            if(processSuccess){
                resolve(fileName + "processed successfully");
            }
            else{
                reject("file processing failed");
            }
        },2000);
    });
}
async function startProcess() {
try{
    let fileName=await downloadFile();
    if(!fileName){throw new Error("file not found");
    }
     let result=await processFile(fileName);
    console.log(result);   
 }
catch(error){
    console.log(error.name)
  }
}
startProcess(); 