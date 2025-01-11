"use strict";
console.log("Section 5");
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    /**
     * Describes the object
     */
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const dep1 = new Department('Department 1');
console.log(dep1);
dep1.describe();
dep1.addEmployee('Filipe');
dep1.addEmployee('Lucas');
// This should be avoided because can bring insecurities to your code. What is the addEmployee also does something
// else inside of the function?
// By adding private in the front of the method, you avoid things like that
// dep1.employees.push('Mike');
dep1.printEmployeeInformation();
// const describeMethod = {name: 'Dummy department', describe: dep1.describe};
// describeMethod.describe();
// As we added the this on the describe function at the class, passing it without the name property it will 
// throw an error
// const describeMethod2 = {describe: dep1.describe};
// describeMethod2.describe();
