// Declaring function with parameter types
function add( n1: number, n2: number ): number {
    return n1 + n2;
}

// Declaring the funciton with return type
function concat2( string1: string, string2: string ): string {
    return string1 + string2;
}

type strInt = string | number;
type multipleOptions = 'a' | 'b' | car;

type Combinable = number | string;
type ConversionDescriptor =  'as-number' | 'as-text';

// Declaring object
type car = {
    brand: string;
    maxSpeed: number;
    maxSpeedChancePercantage: number;
    category: Category
}

// SUV = 0, OFFROAR = 2...
enum Category {SUV, OFFROAD, RACE}
// Adding specific values
enum Category2 {SUV = 1, OFFROAD = 2, RACE = 10}

// Validating function parameters and return
let funcConcat: ( a: string, b: string ) => string;
let funcAdd: ( a:number, b: number ) => number

// This will work beucase the parameters type are correct
funcConcat = concat2;
funcAdd = add;

// This won't work because the of the parameter's type
// funcConcat = add;
// funcAdd = concat2;

// Function that accepts only a car as an object
function testDrive(car: car) {
    console.log(car.brand)
}

// It validates the properties
// let bmw: car = {
//     name: 'BMW',
//     age: 1
// };

// let bmw: car = {
//     brand: 'BMW',
// }

let bmw: car = {
    brand: 'BMW',
    maxSpeed: 450,
    maxSpeedChancePercantage: 90,
    category: Category.RACE
}

// Function parameter validation
function washCar( car: car, cb: ( car: car, maxSpeed: number ) => void) {
    console.log(car);
    cb(car, car.maxSpeed);
}

washCar(bmw, (car, maxSpeed) => {
    console.log('Wash finished', car);
    console.log('MaxSpeed', maxSpeed);
})

const button2 = document.querySelector('button')!;
button2.addEventListener('click', () => console.log("Adding event"))
