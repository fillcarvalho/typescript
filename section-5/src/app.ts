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
class Department2 {
  // Readyonly add an extra typesafe
  constructor(private readonly id: number, private name: string) {}

  describe(this: Department2) {
    console.log(`Department ${this.id}: ${this.name}`);
    console.log("Department", this);
  }
}

const dep2 = new Department2(1, "Department 2");

dep2.describe();

// Working with inheritance

class ITDepartment extends Department2 {
  constructor(id: number, public admins: string[]) {
    // If you are planing to use this, you need to call the super function before
    super(id, "IT Department");
  }
}

const itDepartment = new ITDepartment(2, ["Filipe", "Lucas", "Mike"]);

itDepartment.describe();

class accountingDepartment extends Department2 {
  constructor(id: number, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}


const accountingDep = new accountingDepartment(4, []);

accountingDep.addReport('Problem found');

accountingDep.printReports();
