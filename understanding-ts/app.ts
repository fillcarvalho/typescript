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
const person = {
  name: "Filipe Costa",
  age: 30,
};



console.log(person.name);
