"use strict";
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
require("rxjs");
var array = [1, 2, 2, 3, 4, 5, 6, 2, 3, 4];
var persons = [];
var mockData = function () {
    persons.push({ id: 1, name: "Michael Ganesan" });
    persons.push({ id: 2, name: "Lim Kit Siang" });
    persons.push({ id: 3, name: "Christina Campbell" });
    persons.push({ id: 4, name: "Robert Watts" });
    persons.push({ id: 1, name: "Michael Ganesan" });
    persons.push({ id: 5, name: "Mark Pulliam" });
    return (persons);
};
var persons$ = Observable_1.Observable.from(mockData()).distinct(function (x) { return x.id; });
persons$.subscribe(function (person) {
    console.log("Your data is: " + person.id + " " + person.name);
});
var mydata$ = Observable_1.Observable.from(array).distinct();
mydata$.subscribe(function (x) {
    console.log("Next %s", x);
}, function (error) {
    console.log("Error has occurred: %s", error);
}, function () {
    console.log("Completed");
});
