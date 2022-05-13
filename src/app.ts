import{ invoice } from './classes/invoice.js'
import { listTemplate } from './classes/listTemplate.js';
import{ payment } from './classes/payment.js'
import { HasFormatter } from './Interfaces/HasFormatter.js';

/// From Interfaces and Classes 

// let docOne : HasFormatter;
// let docTwo : HasFormatter;

// docOne = new invoice ('mario', 'web work', 520)
// docTwo = new payment ('luigi', 'landing page', 400)

// let docs : HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs)

/// Now let's put this on practice

// The DOM & Type Casting

// const anchor = document.querySelector('a')!;
// console.log(anchor)
// console.log(anchor.href)

// const form = document.querySelector('form')!;
const formTest = document.querySelector('.new-item-form')!;
// console.log(form)

// We can use "as HTMLFormElement" type, so we can use all the properties and methods inside VsCode
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(formTwo.children)

// Now let's grab each input fields
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let doc : HasFormatter;

    if(type.value === 'invoice'){
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value,'start' )

   
})

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

const invOne = new invoice('mario','work on the mario website', 450);
const invTwo = new invoice('luigi','work on the luigi website', 700);

// we can also defined what type of data or class we want the object to be for example:

// let invoices:string[] = [] // only arrays can be pushed

let invoices:invoice[] = [] // only objects that are created with the class type invoice can be added to the array
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices)

invoices.forEach(inv =>{
    console.log(inv.client, inv.details, inv.amount, inv.format());
});


// Interfaces
// Enforce an specific type structure within classes or objects. Similar to Classes.

interface isPerson{
    name:string,
    age:number,
    speak(a:string):void
    spend(a:number):number
};

const me: isPerson = {
    name:'shaun',
    age:30,
    speak(text:string):void{
        console.log(text)
    },
    spend(amount:number):number{
        console.log('I spend ', amount)
        return amount
    }
}
console.log(me)

// Now we can have multiple diferent objects with the type of person, that it implement isPerson Interface
// New objects with diferent value and methods
// We can pass it as the parameter of a function()
// Example:

const greetPerson = (person:isPerson)=>{
        console.log('hello', person.age)
}
// greetPerson({name:'shaun'}) // Doesn't allow me because it need to match isPerson Interface
greetPerson(me) // If I pass me, allows me because me:isPerson object, where the data is.

// Interfaces with Classes