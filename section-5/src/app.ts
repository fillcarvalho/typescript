console.log("Section 5");

class Department {
  name: string;
  
  constructor(n: string) {
    this.name = n
  }
}

const dep1 = new Department('Department 1');

console.log(dep1)