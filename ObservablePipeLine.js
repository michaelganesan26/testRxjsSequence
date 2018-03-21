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
//let counter:number = 0;
var updateTicks = function (acc, x) {
    if (x % 2 === 0) {
        acc++;
    }
    return (acc);
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
//const ticks$ = Observable.interval(500).scan(updateTicks,0);  //no reliance on external variables
var ticks$ = Observable_1.Observable.interval(500).scan(updateTicks, 0).distinct(); //this eliminates repeats
var t1 = ticks$.subscribe(function (eventTicks) {
    console.log(colors.magenta("t2 stream: " + eventTicks));
    if (eventTicks === 13) {
        t1.unsubscribe();
    }
});
var t2 = ticks$.subscribe(function (eventTicks) {
    console.log(colors.yellow("t2 stream: " + eventTicks));
    if (eventTicks === 14) {
        t2.unsubscribe();
    }
});
