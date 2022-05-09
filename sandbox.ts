/////////////Compiling //////////////////

const character = 'juan';

console.log(character)

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input=>{
    console.log(input);
})

/////////////Type Basics //////////////////

const circ = ( diameter:number ) =>{
    return diameter * Math.PI
}

console.log(circ(5))

/////////////Explicit Types //////////
let characterTwo:string;
let age:number;
let isLoggedIn:false;

/////////////Arrays 

let ninjas:string[];

///////////// I want to create a empty [] I add one after =

let ninjaTwo:string[] = []

/////////////Union Types

let mixedTwo:(string|number|boolean)[] = [];
mixedTwo.push('hello');
mixedTwo.push(5);
mixedTwo.push(false);
console.log(mixedTwo)

/////////////Could Also without the array []

let uid:string|number;
uid = '123';
uid = 123;

/////////////Objects //////////////////

let ninjaThree:object;
ninjaThree ={name:'gloria',age:36}

let ninjaFour:{
    name:string,
    age:number,
    beltColor:string
}

ninjaFour = {
    name:'juan',
    age:54,
    beltColor:'red'
}

console.log(ninjaFour)

///////////// Better Workflow & tsconfig //////////////////