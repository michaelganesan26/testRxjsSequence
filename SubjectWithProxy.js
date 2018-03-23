"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var subject$ = new rxjs_1.Subject();
var source$ = rxjs_1.Observable.interval(300).map(function (v) { return "Interval message " + v; }).take(5);
source$.subscribe(subject$);
subject$.subscribe(function (next) {
    console.log("Next: " + next);
}, function (error) {
    console.log("Error: " + error.message);
}, function () {
    console.log("Process completed!");
});
subject$.next('Our message: #1');
subject$.next('Our message #2');
//send complete after 1000 miliseconds
setTimeout(function () {
    subject$.complete();
}, 1000);
