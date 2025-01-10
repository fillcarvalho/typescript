type Combinable = number | string;
type ConversionDescriptor =  'as-number' | 'as-text';

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;

  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedNumbers = combine(30, 26, "as-number");
console.log(combinedNumbers);

const combinedStringNumbers = combine("30", "26", "as-number");
console.log(combinedStringNumbers);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
