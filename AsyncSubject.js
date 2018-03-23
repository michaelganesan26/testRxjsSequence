"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var delayedRange$ = rxjs_1.Observable.range(0, 5).delay(2000);
var subject$ = new rxjs_1.AsyncSubject(); //Will only return the last value from the observable
delayedRange$.subscribe(subject$);
// let myList$ = delayedRange$.subscribe(x=>{
//       console.log(x);   
// });
//Will return the last value from the observable
subject$.subscribe(function (x) {
    console.log("Next: " + x);
}, function (error) {
    console.log("Error: " + error.message);
}, function () {
    console.log('Process completed!');
});
