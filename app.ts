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

const addTogether = (a: CombinableVariable, b: CombinableVariable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
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
