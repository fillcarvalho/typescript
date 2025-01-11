console.log('Section 7')

// GENERIC TYPES
// type string[]
const names = ['Filipe', 'Lucas'];
// type any
const names2 = [];


// They are exactly the same
const names3: Array<string> = [];
const names4: string[] = [];

type User = {
    name: string;
    age: number;
}

const user: User = {
    name: 'Filipe',
    age: 37
}
// You can also use it as a
const users = Array<User>;

// You can also use promisse
// You tell TS what you are returning in a promise, for example, and it can help you
// TO hvae a better code and validate in case you or Lucas make some mistake
const promisse: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data returned'), 2000)
});

promisse.then((data) => {
    // toUppercase is only valid because TS knows that it will be a string
    console.log(data.toUpperCase())
})

// GENERIC FUNCTIONS
function merge( objA: object, objB: object ) {
    return Object.assign(objA, objB)
}

const merged = merge({name: 'Filipe'}, {age: 30});

// This would work in JS, but TS doesn't know that
// console.log(merged.name, merged.age);

// We can do that with Generic Functions
function merge2<T extends object,U extends object>( objA: T, objB: U ) {
    return Object.assign(objA, objB)
}

const merged2 = merge2({name: 'Filipe'}, {age: 30});

console.log("Merged Object:", merged2);


// Another Generic function
// We just don't cabe about the type, we just care that the parameter has a length property
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>( element: T ): [T, string] {
    let descriptionText = 'Got no value.'

    if ( element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if ( element.length > 1) {
        descriptionText = 'Got ' + element.length + ' element';
    }

    return [element, descriptionText];
}

console.log(countAndDescribe( ['Sports', 'Cooking'] ));

// Keyof

// TS cannot be sure if the key is part of the object, so it just reports an error
// if you specify that T is an object and U extends keyof T, than TS now knows 
// that key must be part of the object
function extractAndConvert<T extends object, U extends keyof T>( obj: T, key: U ) {
    return 'Value: ' + obj[key];
}

console.log( extractAndConvert({name: 'Filipe'}, 'name') )