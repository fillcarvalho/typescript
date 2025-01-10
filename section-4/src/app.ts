// Cannot be changed
const userName = 'Filipe';
// username = 'Lucas';

// Can be changed. 
let age = 49;
age = 38

// Don't use var anymore
// var is a global variable.
// let is a local variable
// If you declare a var outside of the function you can use it inside of the function already
// if you declare a let variable, it's valid only inside of the current scope: inside of {}
// It helps you to make clean code
if ( age > 38 ) {
    let isOld = true;
    var isOld2 = true;
}

// Won't work because the variable is only valid inside of the if
// console.log(isOld);
// Will work on FE because the variable is valid also outsite of the scope
// console.log(isOld2);


// Using arrow functions
const add = ( n1: number, n2: number ) => {
    return n1+n2;
}
// The same as before
const add2 = ( n1: number, n2: number ) => n1+n2;

add(1,2);
add2(1,2);

const concat = ( string1: string, string2: string ) => console.log(string1+string2)
const concat2: ( a: string ) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event))
}


const print2: (a:number) => void = a => console.log(a);

// Default parameters
const add3 = (a:number, b:number = 1) => console.log(a+b);

// SPread operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies]

activeHobbies.push(hobbies[0], hobbies[1]);

activeHobbies.push(...hobbies);

const person = {
    name: 'Filipe',
    weight: 92
};

// Will inject all the parameters there
// We are not creating a copy of the object, we are only
// pointing the the sabe object. Changes in one will change both
const copiedPerson2 = person;

// Correct way
const copiedPerson = {...person}


// Rest parameters
const add4 = (...numbers: number[]) => {
    // Reduce method goes to all of the array and get as the currentResult the return of the last function call
    // and the curentValue as the current array value.
    // The parameter after , is the starting value
    return numbers.reduce((curentResult, curentValue) => curentResult + curentValue, 0)
}

const addedNumbers = add4(1,2,3,4);
const addedNumbers2 = add4(1,2,3,4,123,54,34356,5476657,568,123,34);

// Combine it with Tuples
const add5 = (...numbers: [number, number, number]) => {
    return numbers.reduce((curentResult, curentValue) => curentResult + curentValue, 0)
}

// Only three paremeters
const addedNumbers3 = add5(1,2,3);