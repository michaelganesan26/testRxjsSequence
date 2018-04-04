"use strict";
exports.__esModule = true;
var from_1 = require("rxjs/observable/from");
var operators_1 = require("rxjs/operators");
var people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
];
//emit each person
var source = from_1.from(people);
//group by age
var example = source.pipe(operators_1.groupBy(function (person) { return person.age; }), 
// return each item in group as array
operators_1.mergeMap(function (group) { return group.pipe(operators_1.toArray()); }));
/*
  output:
  [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
  [{age: 30, name: "Joe"}]
  [{age: 35, name: "Sarah"}]
*/
var subscribe = example.subscribe(function (val) { return console.log(val); });
