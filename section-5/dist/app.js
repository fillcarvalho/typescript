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
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const dep1 = new Department("Department 1");
console.log(dep1);
dep1.describe();
dep1.addEmployee("Filipe");
dep1.addEmployee("Lucas");
// This should be avoided because can bring insecurities to your code. What is the addEmployee also does something
// else inside of the function?
// By adding private in the front of the method, you avoid things like that
// WIth the private, you can only access this variable inside of the class
// dep1.employees.push('Mike');
dep1.printEmployeeInformation();
// const describeMethod = {name: 'Dummy department', describe: dep1.describe};
// describeMethod.describe();
// As we added the this on the describe function at the class, passing it without the name property it will
// throw an error
// const describeMethod2 = {describe: dep1.describe};
// describeMethod2.describe();
// You can declare the class properties directly at the constructor
class Department2 {
    // Readyonly add an extra typesafe
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
        console.log("Department", this);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const dep2 = new Department2(1, "Department 2");
dep2.describe();
// Working with inheritance
class ITDepartment extends Department2 {
    constructor(id, admins) {
        // If you are planing to use this, you need to call the super function before
        super(id, "IT Department");
        this.admins = admins;
    }
}
const itDepartment = new ITDepartment(2, ["Filipe", "Lucas", "Mike"]);
itDepartment.describe();
class accountingDepartment extends Department2 {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(text) {
        if (!text) {
            throw new Error('Invalid parameter');
        }
        this.addReport(text);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (employee === 'Filipe') {
            return;
        }
        this.employees.push(employee);
    }
}
const accountingDep = new accountingDepartment(4, []);
accountingDep.addReport('Problem found');
accountingDep.printReports();
console.log(accountingDep.mostRecentReport);
accountingDep.mostRecentReport = 'Using setter';
console.log(accountingDep.mostRecentReport);
