// DECORATORS

// meta-programming
// not direct impact on end users
// for writing code that is easier to use for other developers

// they are functions that you apply to a class
// they receive parameters - they don't run when you instantiate a class

const Logger = (logString: string) => {
  return function(constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

const WithTemplate = (template: string, hookId: string) => {
  return (_: Function) => {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template
    }
  }
}

// @Logger("LOGGING - HUMAN")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Human {
  firstName = "Adam"

  constructor() {
    console.log("Creating new human object...")
  }
}

const human1 = new Human()

console.log(human1)