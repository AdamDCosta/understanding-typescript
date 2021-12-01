"use strict";
console.log("your code goes here");
// CORE TYPES
// number (all numbers -> no int or float in JS)
// string ("hi", 'hi', `hi`)
// boolean (true or false -> NOT "truthy" or "falsy")
// object (any JS object, more specific types of object are possible)
// array (type can be flexible or strict)
// tuple (when you need an exact number of elements in an array and know each of their types - ADDED BY TYPESCRIPT)
// enum (added by typescript -> automatically enumerated global constant identifiers -> enum{ NEW, OLD })
// any (set types to any type eg: any[] is an array of any type you want to add)
// TS - STATIC TYPING - we define type during development
// JS uses "dynamic types" -> resolved during runtime
const add = (n1, n2, showResult, phrase) => {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
var Info;
(function (Info) {
    Info[Info["ADMIN"] = 0] = "ADMIN";
    Info[Info["READ_ONLY"] = 1] = "READ_ONLY";
    Info[Info["AUTHOR"] = 2] = "AUTHOR";
})(Info || (Info = {}));
;
// interface Person {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string], // tuple
//   info: Info
// }
// const adam: Person = {
//   name: "Adam",
//   age: 31,
//   hobbies: ["reading", "coding"],
//   role: [9, "striker"],
//   info: Info.ADMIN   
// }
// let favActivities: string[]
// favActivities = ["sports"];
// console.log(adam.info)
// for (const hobby of adam.hobbies) {
//   console.log(hobby.toUpperCase())
// }
