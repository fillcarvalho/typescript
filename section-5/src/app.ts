console.log("Section 5");

class Department {
  private name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  /**
   * Describes the object
   */
  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
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

abstract class departmentAdapter {
    abstract test(): void;
}


class Department2 implements departmentAdapter {
  protected employees: string[] = [];

  test(): void {
      console.log('Method test impplemented');
  }

  static fiscalYear = 2024;

  static createEmployee(name: string) {
    return { name: name };
  }

  // Readyonly add an extra typesafe
  constructor(private readonly id: number, private name: string) {}

  describe(this: Department2) {
    console.log(`Department ${this.id}: ${this.name}`);
    console.log("Department", this);
  }

  addEmployee(employee: string) {
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

class ITDepartment extends Department2 implements departmentAdapter {
  constructor(id: number, public admins: string[]) {
    // If you are planing to use this, you need to call the super function before
    super(id, "IT Department");
  }
}

const itDepartment = new ITDepartment(2, ["Filipe", "Lucas", "Mike"]);

itDepartment.describe();

class accountingDepartment extends Department2 {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(text: string) {
    if (!text) {
      throw new Error("Invalid parameter");
    }
    this.addReport(text);
  }

  constructor(id: number, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(employee: string): void {
    if (employee === "Filipe") {
      return;
    }
    this.employees.push(employee);
  }
}

const accountingDep = new accountingDepartment(4, []);

accountingDep.addReport("Problem found");

accountingDep.printReports();

console.log(accountingDep.mostRecentReport);

accountingDep.mostRecentReport = "Using setter";

console.log(accountingDep.mostRecentReport);

console.log(Department2.createEmployee("Filipe"));
console.log(Department2.fiscalYear);
