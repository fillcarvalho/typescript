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


const print2: (a:number) => void = a => console.log(a)