//function

// let a=10;

// function firstfunction(){
//     console.log('lovelynaveen');  //'lovelynaveen'
//         console.log(a);  //10
// }

// firstfunction()

//arrow function

// const arrfun=()=>{
//     console.log("cricket");  //'cricket'
       
//     }
// arrfun()

//res

// let y=20;
// let z=30;

// const res=function(a,b){
//     console.log(a,b);  //20,30
// }
// res(y,z)

// IIFE

// (function(){
//     console.log("I will go to chennai!");  //'I will go to chennai'
// })();

// let a=30;

// (function(){
//     let a=30
//     console.log(a); //30
// })();

//Anonymous Function

// setTimeout(function(){
//     console.log("there is one processes");  //'there is one processes'
// }, 1000);

//   Hof

// function display(naveen){
//     return function(lovely){
//         console.log(lovely+","+naveen);  ///'hi',Naveen'
//     };
// }

// const retfun=display("Naveen");
// retfun("hi");

// call back

// function processUserInput(callback){
//     const name= "lovely";
//     callback(name);
// }

// processUserInput(function(name){
//     console.log("self, "+ name);  //'self, lovely'
// });

// returing values

// function square(num){
//     return num * num;
// }

// console.log(square(6));  //36

// Basic if Else statment

// let age=40;

// if(age>=35){
//     console.log("you are valuable to coding");  // 'you are valuable to coding'
// } else {
//     console.log("you are not valuable to coding");
// }

// let age=55

// if(age>=65){
//     console.log("you are valuable to coding");
// } else {
//     console.log("you are not valuable to coding");  // 'you are not valuable to coding'
// }

// if-else if-else ladder

// let mark=80;

// if(mark>=70){
//     console.log("Grade: A");  // 'Grade: A'
// } else if(mark>=60){
//     console.log("Grade: B");
// }

//Nested if-else

// let year=2024;
// let isLeapYear;

// if (year % 4 === 0){
//     if (year % 100 === 0){
//         if (year % 400 === 0){
//             isLeapYear=true;
//         } else {
//             isLeapYear=false;
//         }
//     }else {
//         isLeapYear=true;
//     }
// } else {
//     isLeapYear=false;
// }

// console.log(isLeapYear ? "leap year" : "Not a leap year");  // 'leap year'

// ternary operator 

// let age=20;
// let caneligble=(age>=18) ? "yes": "no";
// console.log("caneligible:" + caneligble);  // 'caneligible:yes'

// switch statement

// let char = "W";

// switch (char) {
//     case "R":
//         console.log("Red,");
//         break;
//         case "G":
//             console.log("Green.");
//             break;
//             case "B":
//             case "W":
//                 console.log("White");  // 'White'
//                 break;
//                 default:
//                     console.log("No color.");
//                     break;  
// }

// // while loop

// let i=1;

// while (i<=5){
//     console.log("naveen");  // 'naveen', 'naveen', 'naveen', 'naveen', 'naveen'
//     i++;
// }

// do while loop

// let i=3;

// do {
//     console.log("lovely");  // 'lovely', 'lovely', 'lovely'
//     i++;
//     }
//     while (i<=5);
//     return 0;

// for loop 

// let i;

// for (i=0; i<=5; i++){
//     console.log("lovable",i);  
// }
// return 0;

// for-in-loop 

// let  character={
//     name: "naveen",
//     age: 20,
//     city: "dindigul",
// };

// for(let key in character){
//     console.log(key+":"+ character[key]);  
// }


// for-of-loop 

// let numbers=[10,20,30,40,50];
// for(let num of numbers){
//     console.log("Number:"+num);  // ' Number:10' this like 4 times comes
// }

// nested for loop 

// for (let a=2; a<=4; a++){
//     for (let b=2; b<=4; b++){
//         console.log("a="+a+,b="+b");  
//     }
// }

