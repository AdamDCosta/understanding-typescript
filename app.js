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
var merge = function (objA, objB) {
    return Object.assign(objA, objB);
};
var mergedObj = merge({ name: "adam" }, { age: 31 });
mergedObj.name;
