// for loop
// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }

// while loop
// let n=1;
// while(n<=10)
// {
//     console.log(n);
//     n++
// }

// do..while

// let n=1
// do
// {
//     console.log(n);
//     n++;

// }while(n<=10);




// for(let i=10;i>=1;i--)
// {
//     console.log(i);
// }

// EVEN NUMBERS
// for(let i=2;i<=20;i++)
// {
//     if(i%2===0)
//     {
//         console.log(i);
//     }
        
// }
// let i=2;
// while(i<=20)
// {
//     if(i%2===0)
//     {
//         console.log(i);
        
//     }
//     i++;
    
// }

// for(let i=1;i<=20;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }
// for( let i=1;i<=10;i++)
// {
//     n=7;
//     s=i*n;
//     console.log(i,"*",n,"=",s);
// }

// sum of number
// let sum=0;
// for(let i=1;i<=100;i++)
// {
    
//     sum=sum+i;
//     console.log(sum);

// }

// using while loops
// let sum=0;
// let i=1;
// while(i<=100)
// {
//     sum=sum+i;
    
//     i++;
// }
// console.log(sum);


// let num=45678;
// let count=0;

// while(num>0)
// {
//     num=parseInt(num/10); 
//     count++;
// }
// console.log(count);

// let char="JAVASCRIPT";

// for(let i=0;i<)

// for(let i=20;i>=1;i--)
// {
//     console.log(i);
// }


// let num=5;
// fact=1;
// for(let i=1;i<=5;i++)
// {
    
//     fact=fact*i;
    
    
// }
// console.log(fact);

// let num=1234;
// sum=0;
// while(num>0)
// {
//     digit=num%10;
//     sum=sum+digit;
//     num=num/10;
// }
// console.log(sum);

// let num=284639;
// count=0;
// while(num>0){
//     let digit=num%10;

//     if(digit%2===0)
//     {
//         count++;
//     }
    
//     num=parseInt(num/10);
// }
// console.log(count);


for (let i = 1; i <= 5; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars = stars + j;
    }

    console.log(stars);
}