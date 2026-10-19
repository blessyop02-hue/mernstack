// function mainFunction(callback){
//     callback();
// }
// function sayHello(){
//     console.log("hello");
// }
// mainFunction(sayHello);

// function greet(name,callback){
//     console.log("hello"+name);
//     callback();
// }
// function sayBye(){
//     console.log("goodbaye");
// }
// greet("john",sayBye);


// function calculate(num1,num2,operation){
//     return operation(num1,num2);
// }
// function add(a,b){
//     return a+b;
// }
// function multiply(a,b){
//     return a*b;
// }
// console.log(calculate(5,3,add));
// console.log(calculate(5,3,multiply));



// function greet(name){
//     console.log("hello"+name);
// }
// function processUser(callback){
// callback("blessy")
// }

// processUser(greet);

// function getUser(callback){
//     setTimeout(()=>{
//         const user={name:"ali"};
//         callback(user);
//     },1000);
// }
// function handleUser(user){
//     console.log(user);
// }
// console.log("start");
// getUser(handleUser);
// console.log("end");


// function downloadFile(processFile){
//     console.log("download file....");
//     setTimeout(function (){
//         console.log("download complete");
//         processFile();
//     },2000);
// }
// function processFile(){
//     console.log("processing file..");
// }
// downloadFile(processFile);


// function loginUser(username,callback){
//     console.log("logging in" + username + "...");
//     setTimeout(function(){
//         console.log("login successful");
//         callback(username);
//     },2000);
// }
// function showDashbord(username){
//     console.log("welcome to dashbord"+ username +"!");
// }
// loginUser("ali",showDashbord);


function placeOrder(item,callback){
    console.log("placing order for" + item + "....");
    setTimeout(function(){
        console.log("order placed");
        callback(item);
    },2000);
}
function shipOrder(item,callback){
    console.log("shipping " + item + "...");
    setTimeout(function(){
        console.log("order shipped");
        callback(item);
    },2000);
}
function deliverOrder(item){
    console.log(item + "delivered to your door");
}
placeOrder("laptop",function(item){
    shipOrder(item,function(item){
        deliverOrder(item);
    });
});