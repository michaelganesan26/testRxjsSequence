"use strict";
/* ===========================
   Description: Schedular
   Date: 04/02/2018
   Notes: Sample application using a schedular
 
   =========================== */
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/range");
require("rxjs/add/operator/groupBy");
require("rxjs/add/operator/map");
require("rxjs/add/observable/from");
require("rxjs/add/operator/observeOn");
var asap_1 = require("rxjs/scheduler/asap");
//Create a sample array
var myArray = [];
var displayArray = function () {
    myArray.forEach(function (element) {
        console.log("" + element);
    });
};
var displayAsync = function (display) {
    var currentTime = Date.now();
    Observable_1.Observable.from(myArray, asap_1.asap).subscribe(function (x) {
        if (display) {
            console.log("Value: " + x);
        }
    }, function (error) {
        console.log("Error Message: " + error.message);
    }, function () {
        console.log("Total Time: " + (Date.now() - currentTime) + "ms");
    });
    console.log("Hi there from Asynchronous!");
};
var displaySynchronous = function (display) {
    var currentTime = Date.now();
    Observable_1.Observable.from(myArray).subscribe(function (x) {
        if (display) {
            console.log("Value: " + x);
        }
    }, function (error) {
        console.log("Error Message: " + error.message);
    }, function () {
        console.log("Total Time: " + (Date.now() - currentTime) + "ms");
    });
    console.log("Hi there from synchronous! ");
};
var counter = 0;
//map the values
var displayObserveOn = function () {
    Observable_1.Observable.from(myArray).groupBy(function (value) { return (value % 2) === 0; })
        .map(function (value) { return value.observeOn(asap_1.asap); })
        .subscribe(function (groupObserver$) {
        console.log("Your group is: " + ++counter);
        groupObserver$.subscribe(function (x) {
            console.log("" + x);
        });
    });
};
var MAX_RANGE = 50;
Observable_1.Observable.range(1, MAX_RANGE).subscribe(function (x) {
    myArray.push(x);
}, function (error) {
    console.log("Error fill the array: " + error.message);
}, function () {
    console.log("Initialized the array");
    displayObserveOn();
});
