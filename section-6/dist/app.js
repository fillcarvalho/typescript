"use strict";
const e1 = {
    name: "Mike",
    startDate: new Date(),
    privileges: ["hire", "fire"],
};
// Typeguards are there to help you to identify the type of the variable and decide what you need to do with that
// MAybe you have functions taht work with different variable types
function test(a, b) {
    if (typeof a === "number" || typeof b === "number") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function test2(a, b) {
    if (typeof a === "number" || typeof b === "number") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const test3 = test("Filipe", " Max");
test3.split(" ");
function printEmployeeInformation(emp) {
    console.log("Empname", emp.name);
    if ("privileges" in emp) {
        console.log("Privileges:", emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("StartDate:", emp.startDate);
    }
}
let e2 = {
    name: "Mike",
    privileges: ["Hire", "Fire"],
};
// It's going to print the startdate because e1 has one
printEmployeeInformation(e1);
// It's going to print the privilegs because e2 has some
printEmployeeInformation(e2);
// You can also use it with Classes
class Car {
    drive() {
        console.log("Driving");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck");
    }
    loadCargo() {
        console.log("Loading the truck");
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving the animal with speed:" + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 100 });
// Working with TypeCasting
// TS knows that P is a Patagtaph because it's a p tag
const paragraph = document.querySelector("p");
// TS doesn't know the object type because it's returned by ID
const input = document.getElementById("input");
// Would work, but TS doesn't accept because he doesn't know that input is a input
// input.value = 'Hi there';
// TS now knows the type
const input2 = document.getElementById("input");
const input3 = document.getElementById("input2");
input2.value = "Hi there 1";
input3.value = "Hi there 2";
// When you ARE SURE that this will not return null, you can just add a ! in the end
const input4 = document.getElementById("input3");
// When you ARE SURE that this will not return null, you can just add a ! in the end
const input5 = document.getElementById("input3");
if (input5) {
    input5.value = "Hi there 3";
}
const error = {
    cod: "1",
    email: "Not a valid e-mail",
    username: "Must start with a caracter",
    whatever: "Whatever message",
};

const fetchedUserData = {
    id: 'ui1',
    name: 'Filipe',
    job: { title: 'FE Webdeveloper', description: 'Athlos Game'}
}
// Would work
console.log(fetchedUserData.job.title);


// Sometimes, you dont't have all the information when you fetch an user and you need to treat it
const fetchedUserData2 = {
    id: 'ui1',
    name: 'Filipe',
    // job: { title: 'FE Webdeveloper', description: 'Athlos Game'}
}

// it will log ig JOB is declared
console.log(fetchedUserData2?.job?.title);

const userInput = '';
// Will returno Default even if userInput = '', for example
const storedData = userInput || 'Default';
// Will returno Default only if userInput is undefined or null
const storedData2 = userInput ?? 'Default';

console.log(storedData)
console.log(storedData2)