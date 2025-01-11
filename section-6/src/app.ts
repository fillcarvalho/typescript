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
type Combinable = string | number | Date;
type Numeric = number | boolean | Date;
type intersectionType = Combinable & Numeric