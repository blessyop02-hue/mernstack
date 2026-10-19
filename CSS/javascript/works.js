// let num=-1;
// if(num>0)
// {
//     console.log("positive");
// }
// else{
//     console.log("negative");
// }


// let age=8;
// if(age>=18)
// {
//     console.log("adult");
// }

// let num=3;
// if(num%2==0)
// {
//     console.log("even number");
// }
// else{
//     console.log("odd");
// }

// let x=60;
// if(x>40)
// {
//     console.log("pass");
// }

// let age=25;
// let haslicence=true;
// if(age>=18)
// {
//     if(haslicence)
//     {
//         console.log("you can drive");
//     }
//     else
//     {
//         console.log("Apply for a license");
//     }
// }
// else
// {
//     console.log("too young to drive");
// }

// let username="admin";
// let password="12345";
// console.log("username:",username);
// console.log("password:",password);

// if(username ==="admin" && password==="1234")
// {
//     console.log("login succefully");
// }
// else{
//     console.log("login failed");
// }

let num=1234;
sum=0;
while(num>0)
{
    digit=num%10;
    sum=sum+digit;
     num=(num/10);
}
console.log(sum);



let word = "banana";
let count=0;
for(let i=0;i<=word.length;i++){
if(word[i]==="a"){
    Count++;
    }
}
console.log(count);
