// INTERSECTION TYPES

type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
}

// could do this with interfaces eg interface ElevatedEmployee extends Admin, Employee

type ElevatedEmployee = Admin & Employee;

// combination of the two types

const e1: ElevatedEmployee = {
  name: "Adam",
  priviledges: ["create-server"],
  startDate: new Date()
}

type CombinableVariable = string | number; // union type
type Numeric = number | boolean;


// Universal will be type number as an intersection will take the type in common
type Universal = CombinableVariable & Numeric


// TYPE GUARDS
// checking if a method or property exists before trying to use it
// for objects use instanceof or in
// for other types use typeof



// const addTogether = (a: CombinableVariable, b: CombinableVariable) => {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }





type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log("Name: " + emp.name)
  if ("priviledges" in emp) {
    console.log ("Privileges: " + emp.priviledges) //  errors because UnknownEmployee may be of type Employee -> which doesn't have priviledges. Must put it inside a type check first
  }
  if ("startDate" in emp) {
    console.log("start date: " + emp.startDate)
  }
}

printEmployeeInfo(e1);


class Car {
  drive() {
    console.log("Driving...")
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...")
  }
  loadCargo(amount: number) {
    console.log("Loading truck... " + amount)
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(1000);
  // }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// DISCRIMINATED UNION
// makes implementing type guards easier

interface Bird {
  type: "bird"; // type must hold a string which must say bird
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse

const moveAnimal = (animal: Animal) => {
  // can't use instanceof with interfaces
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving with speed: " + speed)
}

moveAnimal({type: "bird", flyingSpeed: 20})


// TYPE CASTING -> where TS is unable to detect type on its own

// TS can work out the below is an HTMLParagraphElement
const paragraph = document.querySelector("p");

//TS can only work out that the below is an HTMLElement
const paragraph2 = document.getElementById("message-output")


// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!; // ! at the end is not null
// similar to React JSX syntax -> could clash, use below instead:

// const userInputElement = document.getElementById("user-input") as HTMLInputElement;

const userInputElement = document.getElementById("user-input")

// if you're unsure whether a null value could be returned:
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!"
}


// value doesn't exist on HTMLElement, but does on HTMLInputElement
// userInputElement.value = "Hi there!";


// INDEX TYPES

// when not sure what the keys will be but that the values will be of a certain type
// when not sure how many properties are needed

interface ErrorContainer { // { email: "Not a valid email", username: "Must start with a character!" }
  [prop: string]: string;
  // when implementing this interface - the keys and values must be strings
  // if you have an index type then all other properties must be of the same type, eg strings in this case
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Mut start with a capital letter!"
}


// FUNCTION OVERLOADS



function addTogether(a: number, b: number): number;
function addTogether(a: string, b: string): string;
function addTogether(a: CombinableVariable, b: CombinableVariable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const addResult = addTogether("Adam", "DCosta");
addResult.split(" "); // won't work as it could be a number


// OPTIONAL CHAINING
// if we're getting data from backend and not sure what data will be returned

const fetchedUserData = {
  id: "u1",
  name: "adam",
  job: {title: "CEO", description: "My own company"}
}

console.log(fetchedUserData?.job?.title);
// safely access nested properties in an object and won't throw a runtime error if such properties don't exist



// NULLISH COALESCING

const usernameInput = null;

const storedData = usernameInput ?? "DEFAULT"
// if usernameInput is null or undefined use the fallback