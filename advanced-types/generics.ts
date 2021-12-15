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

// custom generics & type constraints

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: "adam" }, { age: 31 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
};

console.log(countAndDescribe(["sports", "cooking"]));

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return "Value " + obj[key];
};

extractAndConvert({ name: "adam" }, "name");

// GENERIC CLASSES

// by giving it a generic class you can instantiate it with whatever type is needed, eg numbers or strings.

class DataStorage<T extends string | number | boolean> { // only workds with primitives
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("adam")
textStorage.addItem("isobel")
textStorage.addItem("maddi")
textStorage.removeItem("adam")
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1)
numberStorage.addItem(2)

// but this can cause problems with reference types

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: "adam"})
// objStorage.addItem({name: "max"})
// // ...
// objStorage.removeItem({name: "adam"})
// console.log(objStorage.getItems())

// the above only removes last item in array, not the object passed, as it is technically a new object, the array method can't find the index (and so returns -1 which is the last index)


// GENERIC UTILITY TYPES

//partials - turns the type into one where the properties are optional

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseGoal = (title: string, description: string, date: Date): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// readonly

const someArr: Readonly<string[]> = ["adam", "sports"];
// someArr.push("cooking") -> won't work when set to readonly



