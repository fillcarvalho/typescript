"use strict";
console.log("Section 5");
class Department {
    constructor(n) {
        this.name = n;
    }
    /**
     * Describes the object
     */
    describe() {
        console.log('Department: ' + this.name);
    }
}
const dep1 = new Department('Department 1');
console.log(dep1);
dep1.describe();
const describeMethod = { name: 'Dummy department', describe: dep1.describe };
describeMethod.describe();
// As we added the this on the describe function at the class, passing it without the name property it will 
// throw an error
// const describeMethod2 = {describe: dep1.describe};
// describeMethod2.describe();
