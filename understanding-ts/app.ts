function combine(input1: string | number, input2: string | number, resultConversion: 'as-number' | 'as-text') {
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

const combinedNumbers = combine(30,26, 'as-number');
console.log(combinedNumbers);

const combinedStringNumbers = combine('30','26', 'as-number');
console.log(combinedStringNumbers);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);