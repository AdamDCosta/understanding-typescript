// INTERFACES
// describes structure of an object
// doesn't exist in JS
// don't initialize attributes
// use interfaces to typecheck variables/objects
// implement them in a class
// used to share functionality amongst different classes
// no implementation details which is what abstract classes do have
// can't add public or private
// can add readonly

interface Named {
  readonly name?: string;
  outputName?: string; // optional attribute
}

interface Greetable extends Named {
  greet(phrase: string): void
}


class Person implements Greetable {
  name?: string;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase?: string) {
    if (this.name) {
      console.log( phrase + " " + this.name)
    } else {
      console.log("Hi!")
    }
  }
}


let user1: Greetable;
// all we need to know about user1 is that it has to have a greet method

user1 = new Person("adam")
//this works because Person implements Greetable (which has a greet method)

user1.greet("hi there, my name is")
console.log(user1)

let user2 = new Person()
user2.greet();

// Interfaces for functions

interface AddFn {
  (a: number, b: number): number;
}

let addingTwoNumbers: AddFn;

addingTwoNumbers = (n1: number, n2: number) => {
  return n1 + n2;
}