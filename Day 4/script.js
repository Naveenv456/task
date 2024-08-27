// hoisting

// var a=20;
// console.log(a);  // 20

// function

// function display(){
//     console.log("hi,manager!");  // 'hi,manager!'
// }
// display();

// global and local scope 

// var globalvar = "I was global";

// function myfunction(){
//     var localvar="I was local";
// console.log(globalvar);
// console.log(localvar);
// }
// myfunction();
// console.log(localvar);  // localvar is not defined

// block scope 

// if (true){
//     let blockvar = "I am block-scoped";
//     console.log(blockvar);
// }
// console.log(blockvar);  // block i s not defined

// Array

let juice= ["orange","rosemilk","lemon","mango"];
console.log(juice[2]);  //'lemon'
console.log(juice.length);  // 4

// common Array

// juice.push("orange");
// console.log(juice);  //output can see quokka

// // shift and unshift

// juice.unshift("slice");
// console.log(juice);

// juice.shift();
// console.log(juice);

// // slice () and splice ()

// let slicedjuice=juice.slice(1,3);
// console.log(slicedjuice);

// juice.splice(1,1,"chellam");
// console.log(juice);

// // map

// let upperCasejuice=juice.map(juice=>
// juice.toUpperCase());
// console.log(upperCasejuice);

// // filter

// let filteredjuice=juice.filter(juice=>juice.length>4);
// console.log(filteredjuice);

// // for each

// juice.forEach(juice=>
// console.log(juice));

//json 

// let jsonData=[{
//     name: "Naveen",
//     age: 20,
//     city: "dindigul"
// },
// {
//     name: "chandru",
//     age: 24,
//     city: "palani"
// }]

// jsonData.forEach((i, ind)=>{
//     console.log(i.name);
//     console.log(i.age);
//     console.log(i.city);
// })

