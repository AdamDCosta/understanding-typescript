// GENERICS

// const namesArr: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!")
//   }, 2000)
// })

// promise.then(data => {
//   data.split(" ");
// })

// custom generics

const merge = <T, U> (objA: T, objB: U) => {
  return Object.assign(objA, objB)
}



const mergedObj = merge({name: "adam"}, {age: 31})
mergedObj.name