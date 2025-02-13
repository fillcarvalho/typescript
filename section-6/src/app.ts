type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Mike",
  startDate: new Date(),
  privileges: ["hire", "fire"],
};

// You can also make it with interfaces and it will exact the same effect
type Combinable = string | number;
type Numeric = number | boolean;
type intersectionType = Combinable & Numeric;

// Typeguards are there to help you to identify the type of the variable and decide what you need to do with that
// MAybe you have functions taht work with different variable types
function test(a: Combinable, b: Combinable) {
  if (typeof a === "number" || typeof b === "number") {
    return a.toString() + b.toString();
  }

  return a + b;
}

// I cannot do that, beucause TS doesn't know what I am returning.
// It could be a string, but could also be a number
// const test2 = test('Filipe', ' Max');
// test.split(' ');

// In order to to that, we need to tell TS that this function might return different types depending on the
// parameters you pass to it
function test2(a: string, b: string): string;
function test2(a: number, b: number): number;
function test2(a: Combinable, b: Combinable) {
  if (typeof a === "number" || typeof b === "number") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const test3 = test("Filipe", " Max");
test3.split(" ");

// There are other typeguards types
type UnkownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnkownEmployee) {
  console.log("Empname", emp.name);

  if ("privileges" in emp) {
    console.log("Privileges:", emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("StartDate:", emp.startDate);
  }
}

let e2: Admin = {
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

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

useVehicle(v1);
useVehicle(v2);

// Descrimonated unions are used to make it possible to check the object type
// When working with Combined Types
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
const input2 = <HTMLInputElement>document.getElementById("input");
const input3 = document.getElementById("input2") as HTMLInputElement;

input2.value = "Hi there 1";
input3.value = "Hi there 2";

// When you ARE SURE that this will not return null, you can just add a ! in the end
const input4 = document.getElementById("input3")!;

// When you ARE SURE that this will not return null, you can just add a ! in the end
const input5 = document.getElementById("input3");

if (input5) {
  (input5 as HTMLInputElement).value = "Hi there 3";
}

// Index properties help us to write more flexible code

// Every prop that will be added to this Interface need to be a string, the name and the value
// You can add new properties to the interface, but they need to have the same type as the prop
// In this case, it doean'e mather how many properties i have
interface ErrorContainer {
  // { email: 'Not a valid e-mail', username: 'Must start with a caracter' }
  cod: string;
  [prop: string]: string;
}

const error: ErrorContainer = {
  cod: "1",
  email: "Not a valid e-mail",
  username: "Must start with a caracter",
  whatever: "Whatever message",
};
