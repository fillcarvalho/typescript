"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function concat2(string1, string2) {
    return string1 + string2;
}
var Category;
(function (Category) {
    Category[Category["SUV"] = 0] = "SUV";
    Category[Category["OFFROAD"] = 1] = "OFFROAD";
    Category[Category["RACE"] = 2] = "RACE";
})(Category || (Category = {}));
var Category2;
(function (Category2) {
    Category2[Category2["SUV"] = 1] = "SUV";
    Category2[Category2["OFFROAD"] = 2] = "OFFROAD";
    Category2[Category2["RACE"] = 10] = "RACE";
})(Category2 || (Category2 = {}));
let funcConcat;
let funcAdd;
funcConcat = concat2;
funcAdd = add;
function testDrive(car) {
    console.log(car.brand);
}
let bmw = {
    brand: 'BMW',
    maxSpeed: 450,
    maxSpeedChancePercantage: 90,
    category: Category.RACE
};
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
//# sourceMappingURL=filipe.js.map