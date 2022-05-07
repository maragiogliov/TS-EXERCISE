/////////////Compiling //////////////////
var character = 'juan';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
/////////////Type Basics //////////////////
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(5));
/////////////Explicit Types //////////
var characterTwo;
var age;
var isLoggedIn;
/////////////Arrays 
var ninjas;
///////////// I want to create a empty [] I add one after =
var ninjaTwo = [];
/////////////Union Types
var mixedTwo = [];
mixedTwo.push('hello');
mixedTwo.push(5);
mixedTwo.push(false);
console.log(mixedTwo);
/////////////Could Also without the array []
var uid;
uid = '123';
uid = 123;
/////////////Objects //////////////////
var ninjaThree;
ninjaThree = { name: 'gloria', age: 36 };
var ninjaFour;
ninjaFour = {
    name: 'juan',
    age: 54,
    beltColor: 'red'
};
console.log(ninjaFour);
