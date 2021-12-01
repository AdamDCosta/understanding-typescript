"use strict";
// functions
const addSomeNumbers = (n1, n2) => {
    return n1 + n2;
};
const printNumber = (num) => {
    console.log("result: " + num);
};
// adding callback to functions
const addAndHandle = (n1, n2, cb) => {
    const sumResult = n1 + n2;
    cb(sumResult);
};
printNumber(addSomeNumbers(20, 30));
let combineValues;
combineValues = 5; // would result in an error below
combineValues = addSomeNumbers;
console.log(combineValues(8, 8));
// function types
let addedNums;
// addedNums can take any function which has two number parameters and returns a number
addedNums = addSomeNumbers;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
