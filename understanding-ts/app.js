function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// let combinedValues: Function;
var combinedValues;
combinedValues = add;
// combinedValues = printResult;
// console.log(combinedValues(8, 8));
addAndHandle(10, 8, function (result) { return console.log(result); });
