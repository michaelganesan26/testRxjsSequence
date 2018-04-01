"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
require("rxjs");
let array = [1, 2, 2, 3, 4, 5, 6, 2, 3, 4];
let persons = [];
let mockData = () => {
    persons.push({ id: 1, name: "Michael Ganesan" });
    persons.push({ id: 2, name: "Lim Kit Siang" });
    persons.push({ id: 3, name: "Christina Campbell" });
    persons.push({ id: 4, name: "Robert Watts" });
    persons.push({ id: 1, name: "Michael Ganesan" });
    persons.push({ id: 5, name: "Mark Pulliam" });
    return (persons);
};
let persons$ = Observable_1.Observable.from(mockData()).distinct(x => x.id);
persons$.subscribe((person) => {
    console.log(`Your data is: ${person.id} ${person.name}`);
});
let mydata$ = Observable_1.Observable.from(array).distinct();
mydata$.subscribe(x => {
    console.log("Next %s", x);
}, (error) => {
    console.log("Error has occurred: %s", error);
}, () => {
    console.log("Completed");
});
