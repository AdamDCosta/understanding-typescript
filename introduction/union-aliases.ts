// union types - more than one type for an input

// type alias - added by typescript

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string"

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let sum: Combinable;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    sum = +input1 + +input2;
  } else {
    sum = input1.toString() + input2.toString();
  }
  // if (resultConversion === "as-number") {
  //   return +sum //(same as parseFloat(sum))
  // } else {
  //   return sum.toString()
  // }
};

const combinedAges = combine(20, 30, "as-number");
console.log(combinedAges);

// won't work if input types of function are numbers
const combinedNames = combine("adam", "dcosta", "as-string");
console.log(combinedNames);

// literal types - clear about exact value -> extra type safety
