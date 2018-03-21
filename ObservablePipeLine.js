"use strict";
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
require("rxjs");
var colors = require("colors");
var MAXValue = 10;
var MINValue = 1;
var data$ = Observable_1.Observable.range(MINValue, MAXValue);
console.log(colors.magenta('Test Code'));
var x$ = Observable_1.Observable.from(data$).filter(function (x, index) {
    if (x % 2 === 0) {
        return true;
    }
    return false;
}).map(function (x) { return x * 10; });
x$.subscribe(function (x) {
    console.log("Your value is " + colors.magenta(x.toString()));
});
var counter = 0;
var updateTicks = function (x) {
    if (x % 2 === 0) {
        counter++;
    }
    return (counter);
};
//Execute statements
// const ticks$ = Observable.interval(1000).map(updateTicks).distinct();
// let test$ = ticks$.subscribe(x=>{
//     console.log(`Your current tick is: ${colors.yellow(counter.toString())}`);
//     if(counter === 13){
//         test$.unsubscribe();
//     }
// });
//using scan to send the variable and eliminate external reference
var ticks$ = Observable_1.Observable.interval(500).scan(updateTicks, 0); //no reliance on external variables
var t1 = ticks$.subscribe(function (eventTicks) {
    console.log("Your event tick counter is local to the stream pipe line: " + colors.magenta(eventTicks.toString()));
    if (eventTicks === 13) {
        t1.unsubscribe();
    }
});
var t2 = ticks$.subscribe(function (eventTicks) {
    console.log("Your event tick counter is local to the stream pipe line: " + colors.yellow(eventTicks.toString()));
    if (eventTicks === 14) {
        t2.unsubscribe();
    }
});
