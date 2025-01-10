function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// let combinedValues: Function;
var combinedValues;
combinedValues = add;
combinedValues = printResult;
console.log(combinedValues(8, 8));
