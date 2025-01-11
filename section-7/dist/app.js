"use strict";
console.log('Section 7');
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
const promisse = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data returned'), 2000);
});
promisse.then((data) => {
    console.log(data.toUpperCase());
});
