"use strict";
/////////////Compiling //////////////////
const character = 'juan';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
/////////////Type Basics //////////////////
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(5));
/////////////Explicit Types //////////
let characterTwo;
let age;
let isLoggedIn;
/////////////Arrays 
let ninjas;
///////////// I want to create a empty [] I add one after =
let ninjaTwo = [];
/////////////Union Types
let mixedTwo = [];
mixedTwo.push('hello');
mixedTwo.push(5);
mixedTwo.push(false);
console.log(mixedTwo);
/////////////Could Also without the array []
let uid;
uid = '123';
uid = 123;
/////////////Objects //////////////////
let ninjaThree;
ninjaThree = { name: 'gloria', age: 36 };
let ninjaFour;
ninjaFour = {
    name: 'juan',
    age: 54,
    beltColor: 'red'
};
console.log(ninjaFour);
///////////// Better Workflow & tsconfig //////////////////
///////////// Function Basics //////////////////
let greet;
// greet = 'hello' // not gonna work
// the ? before : makes the type codition optional
// we can add a default parameter (string = 15) and then the ? gets cancelled because we! are placing an initial value.
// void represent a complete lack of return value diferent from undefined
// we can declare the return type by (parameters):valueType =>{}
const add = (a, b, c = 15) => {
    console.log(a + b);
    console.log(c);
};
add(5, 5, '100');
const minus = (a, b) => {
    return (b + a);
};
let result = minus;
console.log(result(15, 36));
///////////// Type Aliases //////////////////
const lodDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
let detailsPassed = lodDetails;
console.log(detailsPassed(5, 'caballo viejo'));
const greetings = (user) => {
    console.log(`${user.name} says hello ${user.uid}`);
};
const greetingsTwo = (user) => {
    console.log(`${user.name} says hello ${user.uid}`);
};
/// So it might happen that the same specificatoin type parameter repeted in diferent functions, we can prevent that by:
