function combine(input1: string | number, input2: string | number) {
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

const combinedNumbers = combine(30,26);
console.log(combinedNumbers);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);