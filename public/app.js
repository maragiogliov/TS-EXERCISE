"use strict";
// The DOM & Type Casting
// const anchor = document.querySelector('a')!;
// console.log(anchor)
// console.log(anchor.href)
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form)
// We can use "as HTMLFormElement" type, so we can use all the properties and methods inside VsCode
const formTwo = document.querySelector('.new-item-form');
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
