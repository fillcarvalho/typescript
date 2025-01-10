"use strict";
// Initializing a new ts project
// tsc --init
// npm install lite-server
// Add on package.json 
// "scripts": {
//     "start": "lite-server"
//   }
// Declaring function with parameter types
function add(n1, n2) {
    return n1 + n2;
}
// Declaring the funciton with return type
function concat2(string1, string2) {
    return string1 + string2;
}
// SUV = 0, OFFROAR = 2...
var Category;
(function (Category) {
    Category[Category["SUV"] = 0] = "SUV";
    Category[Category["OFFROAD"] = 1] = "OFFROAD";
    Category[Category["RACE"] = 2] = "RACE";
})(Category || (Category = {}));
// Adding specific values
var Category2;
(function (Category2) {
    Category2[Category2["SUV"] = 1] = "SUV";
    Category2[Category2["OFFROAD"] = 2] = "OFFROAD";
    Category2[Category2["RACE"] = 10] = "RACE";
})(Category2 || (Category2 = {}));
// Validating function parameters and return
let funcConcat;
let funcAdd;
// This will work beucase the parameters type are correct
funcConcat = concat2;
funcAdd = add;
// This won't work because the of the parameter's type
// funcConcat = add;
// funcAdd = concat2;
// Function that accepts only a car as an object
function testDrive(car) {
    console.log(car.brand);
}
// It validates the properties
// let bmw: car = {
//     name: 'BMW',
//     age: 1
// };
// let bmw: car = {
//     brand: 'BMW',
// }
let bmw = {
    brand: 'BMW',
    maxSpeed: 450,
    maxSpeedChancePercantage: 90,
    category: Category.RACE
};
// Function parameter validation
function washCar(car, cb) {
    console.log(car);
    cb(car, car.maxSpeed);
}
washCar(bmw, (car, maxSpeed) => {
    console.log('Wash finished', car);
    console.log('MaxSpeed', maxSpeed);
});
const button2 = document.querySelector('button');
button2.addEventListener('click', () => console.log("Adding event"));
