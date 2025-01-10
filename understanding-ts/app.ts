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

// This is better because you proffit of the Type inference
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
  name: "Filipe Costa",
  age: 30,
  hobbies: ['run', 'play', 'grill'],
  role: [2, 'Author']
};

person.role.push('admin');
// person.role[1] = 10;
// Tuples also validate the number of elements in an array
// person.role = [0,'admin','user']


// let favoriteActivities: string[]; // Almost never use never as variable type
// favoriteActivities = ['asdasd'];

for (const hobby of person.hobbies ) {
    console.log(hobby.toUpperCase()) // THe typscript mapps al the string functions because we declared the variable type
}

console.log(person.name);
