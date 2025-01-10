// You can also have nested objects
const product = {
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

// enum Role { ADMIN, READ_ONLY, AUTHOS }

enum Role { ADMIN = 5, READ_ONLY = 8, AUTHOR = 'AUTHOR'}

type strInt = string | number;

// This is better because you proffit of the Type inference
const person = {
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

for (const hobby of person.hobbies ) {
    console.log(hobby.toUpperCase()) // THe typscript mapps al the string functions because we declared the variable type
}

if ( person.role === Role.READ_ONLY ) {
    console.log("READ ONLY");
}

console.log(person.name);
