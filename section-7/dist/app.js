"use strict";
console.log('Section 7');
// GENERIC TYPES
// type string[]
const names = ['Filipe', 'Lucas'];
// type any
const names2 = [];
// They are exactly the same
const names3 = [];
const names4 = [];
const user = {
    name: 'Filipe',
    age: 37
};
// You can also use it as a
const users = (Array);
// You can also use promisse
// You tell TS what you are returning in a promise, for example, and it can help you
// TO hvae a better code and validate in case you or Lucas make some mistake
const promisse = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data returned'), 2000);
});
promisse.then((data) => {
    // toUppercase is only valid because TS knows that it will be a string
    console.log(data.toUpperCase());
});
// GENERIC FUNCTIONS
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = merge({ name: 'Filipe' }, { age: 30 });
// This would work in JS, but TS doesn't know that
// console.log(merged.name, merged.age);
// We can do that with Generic Functions
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const merged2 = merge2({ name: 'Filipe' }, { age: 30 });
