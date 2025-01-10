// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Filipe Costa",
//   age: 30,
// };
// This is better because you proffit of the Type inference
var person = {
    name: "Filipe Costa",
    age: 30,
};
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
console.log(person.name);
