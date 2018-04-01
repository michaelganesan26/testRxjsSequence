"use strict";
/*
Intro: Behavior used as a place holder
Created by: Michael Ganesan
Date: current 03/28/2018
*/
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs");
var subject$ = new BehaviorSubject_1.BehaviorSubject({ id: 0, data: "Waiting for Data" });
subject$.subscribe(function (next) {
    console.log("Your new value is: " + next.data);
});
var tracker$ = Observable_1.Observable.create(function (observer) {
    var counter = 0;
    setInterval(function () {
        counter++;
        //let message = `Data: ${counter}`;
        observer.next({ id: counter, data: "Streaming: " + counter });
    }, 3000);
});
tracker$.subscribe(subject$);
