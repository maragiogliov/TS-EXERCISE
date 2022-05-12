import { invoice } from './classes/invoice.js';
// The DOM & Type Casting
// const anchor = document.querySelector('a')!;
// console.log(anchor)
// console.log(anchor.href)
// const form = document.querySelector('form')!;
const formTest = document.querySelector('.new-item-form');
// console.log(form)
// We can use "as HTMLFormElement" type, so we can use all the properties and methods inside VsCode
const form = document.querySelector('.new-item-form');
// console.log(formTwo.children)
// Now let's grab each input fields
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
////////////////////////////////////////////////////// Classes: A blueprint for an object 01
// class invoice {
//     public client:string;
//     public details:string;
//     public amount:number;
//     constructor ( c: string, d: string, a:number){
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     };
//     format(){
//         return `${this.client} owes £${this.amount} for ${this.details}`;
//     };
// };
// and that is a class with a format method added, now if we want to instantiate that class
// and create an object based on it we:
// const invOne = new invoice('mario','work on the mario website', 450);
// const invTwo = new invoice('luigi','work on the luigi website', 700);
// // we can also defined what type of data or class we want the object to be for example:
// // let invoices:string[] = [] // only arrays can be pushed
// let invoices:invoice[] = [] // only objects that are created with the class type invoice can be added to the array
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices)
// invoices.forEach(inv =>{
//     console.log(inv.client, inv.details, inv.amount, inv.format());
// });
// Now by default when we create objects with this class, all the properties are public,
// meaning whenever we create an instance of that class we can access and modify it. For example:
// invOne.client = 'yoshi';
// invTwo.amount = 5;
// console.log(invOne,invTwo);
// to prevent this we can applying 'access modifiers' in the class (line 35 to 37) we have three types:
// public, private and readonly. 
// if we use acces modifiers we can change the structure of our class / constructure:
// //////////////////////////////////////////////////////////////// Classes: A blueprint for an object 2
// class invoice {
//     // public client:string;
//     // public details:string;
//     // public amount:number;
//     constructor (
//         readonly client : string,
//         public details : string,
//         public amount : number,
//     ){};
//     format(){
//         return `${this.client} owes £${this.amount} for ${this.details}`;
//     };
// };
// and that is a class with a format method added, now if we want to instantiate that class and create an object based on it we:
const invOne = new invoice('mario', 'work on the mario website', 450);
const invTwo = new invoice('luigi', 'work on the luigi website', 700);
// we can also defined what type of data or class we want the object to be for example:
// let invoices:string[] = [] // only arrays can be pushed
let invoices = []; // only objects that are created with the class type invoice can be added to the array
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
;
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spend ', amount);
        return amount;
    }
};
console.log(me);
// Now we can have multiple diferent objects with the type of person, that it implement isPerson Interface
// New objects with diferent value and methods
// We can pass it as the parameter of a function()
// Example:
const greetPerson = (person) => {
    console.log('hello', person.age);
};
// greetPerson({name:'shaun'}) // Doesn't allow me because it need to match isPerson Interface
greetPerson(me); // If I pass me, allows me because me:isPerson object, where the data is.
