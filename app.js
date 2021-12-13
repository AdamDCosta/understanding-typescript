"use strict";
// Intersection types
// combination of the two types
const e1 = {
    name: "Adam",
    priviledges: ["create-server"],
    startDate: new Date()
};
// TYPE GUARDS
// checking if a method or property exists before trying to use it
// for objects use instanceof or in
// for other types use typeof
const addTogether = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
const printEmployeeInfo = (emp) => {
    console.log("Name: " + emp.name);
    if ("priviledges" in emp) {
        console.log("Privileges: " + emp.priviledges); //  errors because UnknownEmployee may be of type Employee -> which doesn't have priviledges. Must put it inside a type check first
    }
    if ("startDate" in emp) {
        console.log("start date: " + emp.startDate);
    }
};
printEmployeeInfo(e1);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading truck... " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    // if ("loadCargo" in vehicle) {
    //   vehicle.loadCargo(1000);
    // }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
};
useVehicle(v1);
useVehicle(v2);
const moveAnimal = (animal) => {
    // can't use instanceof with interfaces
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving with speed: " + speed);
};
moveAnimal({ type: "bird", flyingSpeed: 20 });
