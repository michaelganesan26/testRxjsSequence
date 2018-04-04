"use strict";
/* ===========================
   Description: Sample Application using group by
   Date: 04/04/2018
   Notes: Using groupby for Observables
 
   =========================== */
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/range");
require("rxjs/add/operator/map");
require("rxjs/add/observable/from");
require("rxjs/add/operator/observeOn");
//import 'rxjs/add/observable/toArray';
require("rxjs/add/operator/toArray");
require("rxjs/add/operator/groupBy");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/reduce");
require("rxjs/add/operator/first");
require("rxjs/add/operator/filter");
var testStream$ = Observable_1.Observable.range(1, 10).first();
testStream$.subscribe(function (x) {
    console.log("This is the first item of the array: " + x);
});
var people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
];
//flatMap and merge Map is the same
var example$ = Observable_1.Observable.from(people).groupBy(function (person) { return person.age; })
    .mergeMap(function (group) { return group.reduce(function (acc, curr) { return acc.concat([curr]); }, []); });
var printArray = function (ageFilter, array) {
    if (array.length > 0 && array[0].age === ageFilter) {
        console.log(array);
    }
};
example$.subscribe(function (x) {
    printArray(30, x);
});
