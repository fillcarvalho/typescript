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
    name: 'Mike',
    startDate: new Date(),
    privileges: ['hire', 'fire']
};

// You can also make it with interfaces and it will exact the same effect
type Combinable = string | number;
type Numeric = number | boolean;
type intersectionType = Combinable & Numeric

// Typeguards are there to help you to identify the type of the variable and decide what you need to do with that
// MAybe you have functions taht work with different variable types
function test( a: Combinable, b:Numeric ) {
    if ( typeof a === 'number' || typeof b === 'number' ) {
        return a.toString() + b.toString();
    }

    return a + b;
}

// There are other typeguards types
type UnkownEmployee = Employee | Admin

function printEmployeeInformation( emp: UnkownEmployee ) {
    console.log("Empname", emp.name);

    if ('privileges' in emp) {
        console.log( "Privileges:", emp.privileges)    
    }

    if ('startDate' in emp) {
        console.log( "StartDate:", emp.startDate)    
    }
    
}

let e2: Admin = {
    name: 'Mike',
    privileges: ['Hire', 'Fire']
};

// It's going to print the startdate because e1 has one
printEmployeeInformation(e1);

// It's going to print the privilegs because e2 has some
printEmployeeInformation(e2);

// You can also use it with Classes
class Car {
    drive() {
        console.log('Driving');
    }
}

class Truck {
    drive() {
        console.log("Driving a truck")
    }

    loadCargo() {
        console.log("Loading the truck")
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle( vehicle: Vehicle ) {

    vehicle.drive();
    if ( vehicle instanceof Truck ) {
        vehicle.loadCargo();
    }
    
}

useVehicle(v1);
useVehicle(v2);