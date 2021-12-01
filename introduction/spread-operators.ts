// spread operator

const hobbies = ["reading", "basketball"]
const newHobbies = [...hobbies, "football"]
console.log(newHobbies)

// works with objects too

const person = {
  firstName: "adam",
  personAge: 31
}

const copiedPerson = { ...person }

// rest parameters -- for accepting an unlimited amount of parameters

const addFunction = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)

}

const addedNumbers = addFunction(5, 10, 3, 2)
console.log(addedNumbers)

// array destructuring - pulls out each element of array and stores in a const
// instead of saying const hobby1 = hobbies[0], const hobby2 = hobbies[1]

const [ hobby1, hobby2 ] = hobbies;

// object destructuring
// have to be called the same as the keys in the object

const { firstName, personAge } = person
console.log(firstName)