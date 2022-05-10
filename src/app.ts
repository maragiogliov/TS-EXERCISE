// The DOM & Type Casting

// const anchor = document.querySelector('a')!;
// console.log(anchor)
// console.log(anchor.href)

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form')!;
// console.log(form)

// We can use "as HTMLFormElement" type, so we can use all the properties and methods inside VsCode
const formTwo = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(formTwo.children)

// Now let's grab each input fields
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})