// console.log("hello hamzeh")

// const Person = require('./person');

// console.log(Person)
// console.log(person.name)

// const person1 = new Person('hamzeh', 26);
// person1.greeting();

//write a variable without initial value

var one;

console.log(one)

//write a variable with initial value
var two = 'two';

console.log(two)

//write 3 variables in same line without initial value 
var first, second, theerd;


//write 3 variables in same line with initial value
var n1 = 1, n2 = 2, n3 = 3;

//write 3 variables with Boolean value
var x1 = true, x2 = false, x3 = true; 

console.log(x1,x2,x3);

const y = 10;

//write an empty array without initializing its size
var myArray = [];

//write an array of number from 1 to 10 
var myArray2 = [1,2,3,4,5,6,7,8,9,10];

//write an array of strings has letters from A to J 
var Arraystring = ['A','B','C','D','E','F','J']


//Write an Object has at least 3 attributes (keys) and give each one a numeric value

var obj1 = {
    one:1,
    two:2,
    three:3
}


//write an object has at least 3 attributes (keys) and give each one a string value

var obj2 = {
    one:'one',
    two:'tow',
    three:'three'
}

//write an object has at least 3 attributes (keys) and give each one a Boolean value

var obj3 = {
    one:true,
    two:false,
    three:true
}


//write an object has at least 3 attributes (keys) and give each one an array value

var obj4 = {
    one:[1,2],
    two:[3,4,5],
    three:[6,7]
}


//write an object has at least 3 attributes (keys) and give each one an object value (object of objects)

var obj5 = {
    one:{name:'hamzeh'},
    two:{name:'ali'},
    three:{name:'three'}
}


//Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, object

var obj = {
    one:1,
    two:"hamzeh",
    three:true,
    four:[1,2],
    five:{first:"ali"}
}


//Write an array of objects

let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
 
  ]


//write an array of objects, and each objects is an object of objects that has an array, this array will have at least one object

let cars1 = [
    {
      color:{ color1:"purple",color2:'red'},
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      capacity: [1,2,3,4,5,{c : {n:"mmmm"}}]
    },
    {
        color:{ color1:"purple",color2:'red'},
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        capacity: [1,2,3,4,5,{c : {n:"mmmm"}}]
      },
  
  
  ]




//Write a function to sum two numbers passed in parameters

function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(1,3));

//write a function to multiply two numbers

function mul(n1, n2) {
    return n1 * n2;
}

console.log(mul(1,3));

//write a function to sum two numbers entered by user
// store input numbers
// const num1 = parseInt(prompt('Enter the first number '));
// const num2 = parseInt(prompt('Enter the second number '));

// //add two numbers
// const sums = num1 + num2;

// // display the sum
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);

//Write a function to return a value 

function returnvalue () {
    return "hamzeh"
}

console.log(returnvalue());

//Write a function to print a value

function printvalue() {
    console.log("ali")

}

printvalue();

const express =require('express');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const app =express();
//Bodyparser Middleware
app.use(bodyParser.json());
//DB Config
const db=require('./config/key').mongoURI;
//connect  to Mango 
mongoose.connect(db)
.then(()=>console.log('MangoDB Connected ....'))
.catch(err => console.log(err));
const port =process.env.PORT ||5000 ;
app.listen(port,()=>console.log(`Server started on port  ${port}`));