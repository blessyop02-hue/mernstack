// let promise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Data received successfully");
//     } else {
//         reject("Failed to get data");
//     }
// });

// promise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// const myPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("task complete");
//     },2000);
// });
// myPromise.then(function(result){
//     console.log(result);
// });


// const checknumber=new Promise(function(resolve,reject){
// let number=5;

// if (number>10){
//     resolve("number is big");
// }
// else{
//     reject("number is small");
// }
// });
// checknumber.then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// });


// const loginuser=new Promise(function(resolve,reject)
// {
//     let username="ali";
//     let passwordCorrect=true;
//     setTimeout(function(){
//         if (passwordCorrect){
//             resolve("welcome," + username + "!");
//         }else
//         {
//             reject("wrong password. try again");
//         }
//     },2000);
// });
// loginuser.then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// });


// const downloadFile=new Promise(function(resolve,reject){
//     let downloadSuccess=true;
//     console.log("downloading file..")
//     setTimeout(function(){
//         if(downloadSuccess){
//             resolve("download complete");
//         }else
//             {
//                 reject("download failed.check your connection");

//              }
//     },2000);
// });
// downloadFile.then(function(result){
//     console.log(result);
//     console.log("processing file...");
// })
// .catch(function(error){
//     console.log(error);
// });

// let promis=new Promise (function(resolve,reject){

// });
