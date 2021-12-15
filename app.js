// DECORATORS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// meta-programming
// not direct impact on end users
// for writing code that is easier to use for other developers
// they are functions that you apply to a class
// they receive parameters - they don't run when you instantiate a class
var Logger = function (logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
};
var WithTemplate = function (template, hookId) {
    return function (_) {
        var hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
};
// @Logger("LOGGING - HUMAN")
var Human = /** @class */ (function () {
    function Human() {
        this.firstName = "Adam";
        console.log("Creating new human object...");
    }
    Human = __decorate([
        WithTemplate("<h1>My Person Object</h1>", "app")
    ], Human);
    return Human;
}());
var human1 = new Human();
console.log(human1);
