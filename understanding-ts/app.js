// You can also have nested objects
var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!",
    },
};
/*
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
*/
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Filipe Costa",
//   age: 30,
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOS"] = 2] = "AUTHOS";
})(Role || (Role = {}));
// This is better because you proffit of the Type inference
var person = {
    name: "Filipe Costa",
    age: 30,
    hobbies: ['run', 'play', 'grill'],
    role: Role.READ_ONLY
};
// person.role.push('admin');
// person.role[1] = 10;
// Tuples also validate the number of elements in an array
// person.role = [0,'admin','user']
// let favoriteActivities: string[]; // Almost never use never as variable type
// favoriteActivities = ['asdasd'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // THe typscript mapps al the string functions because we declared the variable type
}
if (person.role === Role.READ_ONLY) {
    console.log("READ ONLY");
}
console.log(person.name);
