// unknown type
// can store any type without getting errors
// different to any

let userInput: unknown
let userName: string

userInput = 5;
userInput = "adam";
// below will error - userName defined as string - userInput isn't defined as string but as unknown, type any would work
// userName = userInput

// Does work if you add in an axtra type check - eg:

let userDescription: unknown;
let userProfile: string;
if (userDescription === "string") {
  userProfile = userDescription;
}

// never type - when function never returns anything - eg throwing an error which stops the script running, also infinite loops

const generateError = (message: string, code: number): never => {
  throw {message: message, errorCode: code};
}

generateError("An error occured", 500)