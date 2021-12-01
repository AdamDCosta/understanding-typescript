"use strict";
// OOP
// work with (real-life) Entities in your code
// eg ProductList object - object holds rendering and fetching logic
// eg Product - renders product and allows addition to cart
// eg ShoppingCart - place order methods, renders cart etc
// CLASSES
// Classes -> blueprints of objects
// Objects -> instances of classes
// singleton -> one instance of a private class
// abstract classes can't be instantiated
class Department {
    // private isn't available to child classes (can't access it with methods), protected is (aka can do method overriding with this attribute)
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: number;
        // private name: string;
        this.employees = []; // public is the default
        // shorthand, instead of defining attributes and then adding them to constructor
        // readonly can only be initialised once and can't be modified afterward
        // this.name = name;
    }
    // static methods
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        // might want to add validation
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2021;
const employee1 = Department.createEmployee("Roger");
// Inheritance
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}
const itDept = new ITDepartment(1, ["Manu", "Steve"]);
itDept.describe();
itDept.addEmployee("Adam");
itDept.addEmployee("max");
itDept.printEmployeeInformation();
// static methods - belong to class not the instance of it
// eg
Math.pow(2, 2);
// singleton - can only instantiate one object from a class, eg we only have one accounting department at our company
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // if class is a singleton - the constructor is private and so you can't call it outside the class - so you need a static method
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment(2, []);
        return this.instance;
    }
    // getters - has to return something
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("no report found");
    }
    // setters
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("please add a report");
        }
        this.addReport(value);
    }
    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    // overriding
    addEmployee(name) {
        if (name === "max") {
            return;
        }
        this.employees.push(name);
    }
}
// const accounting = new AccountingDepartment(3, []) -> won't work with private constructor
const accounting = AccountingDepartment.getInstance();
// console.log(accounting.mostRecentReport)
accounting.mostRecentReport = "we're doing well";
accounting.addReport("something went wrong...");
accounting.printReports();
