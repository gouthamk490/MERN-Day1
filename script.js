// console.log("Hello World");
// var let const - 3 initializations
// let is a block fixed
// var a=10;
// console.log(a);
// var a=20;
// console.log(a);
// let d=23;
// console.log(d);
// {
//     let d=56;
//     // console.log(d); 
// }
// let a=10;
// let b=20;
// console.log(a**b);
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// console.log(a*b);
// let a=10;
// let b="10";
// if(a===b){
//     console.log(true);
// }else{
//     console.log(false);
// }
// == checks values and === checks the datatype
// let a="Goutham";
// let b="Krishna";
// let c=a+b;
// console.log(`My name is ${a} ${b}`); //To add space in btw concatenated strings.....
// let car={
//     model:"spresso",
//     color:"White",
//     price:1000000
// } //object creation
// console.log(car);
// console.log(`My car details are : ${car.model} ${car.color}`);
// let person={
//     name:"Goutham",
//     college:"CCE",
//     class:"S4 CSE",
//     address:{
//         housename:"Punniyam House",
//         street:"Neruvissery"
//     }
// }
// console.log(person);
// console.log(`The name of the person and house name are: ${person.name} ${person.address.housename}`);
// array
// let fruits=["apple","mango","orange"];

// console.log(fruits.length);
// fruits.push("grapes"); //add element to back of array....
// fruits.unshift("dragonfruit"); //add elements from front....
// fruits.pop();  //to delete last element
// fruits.shift(); //to delete first element 
// console.log(fruits);
// let todo=[
//     {
//         id:1,
//         task:"Buy Books"
//     },
//     {
//         id:2,
//         task:"Buy Vegetables"
//     },
//     {
//         id:3,
//         task:"Do Homework"
//     }
// ]
// console.log(todo);
// console.log(todo[2].task);
// Functions
// function Sum(a,b){
//     c=a+b;
//     console.log(c);
// }
// Sum(10,20);
// function Difference(a,b){
//     c=a-b;
//     console.log(c);
// }
// Difference(100,67);
// function Multiply(a,b){
//     c=a*b;
//     console.log(c);
// }
// Multiply(10,20);
// arrow function
// add = (a,b) =>{
//     console.log(a+b)
// }
// add(10,30);

// difference = (a,b) =>{
//     console.log(a-b)
// }
// difference(30,50);

// compare = (a,b) =>{
//     c=a+b;
//     if (c>=10){
//         console.log("The no. is greater than 10");
//     }
//     else{
//         console.log("It is less.");
//     }
// }
// compare(2,25);
 console.log("For loop");
 let numbers= [1,2,3,4,5,6,7,8,9];
 print = (numbers) =>{
     for (var i=0;i<numbers.length;i++){
         console.log(numbers[i]);
     }
 }
 print(numbers);

console.log("While loop");

print = (numbers) =>{
    var i=0
    while(i<numbers.length){
        console.log(numbers[i]);
        i++;
     }
 }
 print(numbers);

console.log("Do-while Loop");
 print = (numbers) =>{
     var i=0
     do{
       console.log(numbers[i]);
        i++;
     }while(i<numbers.length);
 }
 print(numbers);
