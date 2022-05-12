/////////////Compiling //////////////////

const character = 'juan';

// console.log(character)




const inputs = document.querySelectorAll('input');

// console.log(inputs);

inputs.forEach(input=>{
    // console.log(input);
    
})

/////////////Type Basics //////////////////

const circ = ( diameter:number ) =>{
    return diameter * Math.PI
}

console.log(circ(40))

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

///////////// Function Basics //////////////////

let greet: Function;

// greet = 'hello' // not gonna work
// the ? before : makes the type codition optional
// we can add a default parameter (string = 15) and then the ? gets cancelled because we! are placing an initial value.
// void represent a complete lack of return value diferent from undefined
// we can declare the return type by (parameters):valueType =>{}

const add = (a:number, b:number, c:number|string = 15):void =>{ 
    console.log( a + b )
    console.log(c)
}

add(5, 5, '100')

const minus = (a:number, b:number):number =>{
    return (b + a)
}

let result = minus
console.log(result(15,36))

///////////// Type Aliases //////////////////
const lodDetails = (uid: string | number, item: string)=>{
console.log(`${item} has a uid of ${uid}`)
};

let detailsPassed = lodDetails
console.log(detailsPassed(5,'caballo viejo'))

const greetings = (user: {name:string, uid:string|number}) =>{
console.log(`${user.name} says hello ${user.uid}`)
};

const greetingsTwo = (user: {name:string, uid:string|number}) =>{
console.log(`${user.name} says hello ${user.uid}`)
};
/// So it might happen that the same specificatoin type parameter is repeted in diferents functions, we can prevent that with:
 type StringOrNum = string|number;
 type ObjWithName = { name:string, uid: StringOrNum};

const lodDetailsTwo = (uid: StringOrNum, item: string)=>{
console.log(`${item} has a uid of ${uid}`)
};
const greetingsThree = (user: ObjWithName) =>{
console.log(`${user.name} says hello Bob ${user.uid}`)
};
const greetingsThreeAgain = (user: ObjWithName) =>{
console.log(`${user.name} says hello Bob again ${user.uid}`)
};
    
