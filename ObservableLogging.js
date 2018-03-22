"use strict";
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
require("rxjs");
var colors = require("colors");
var d1$ = Observable_1.Observable.interval(500)["do"](function (x) {
    console.log(colors.green("Current Value is: " + x));
}, function (error) {
    console.log(colors.magenta("Sorry your observable encountered an error"));
}, function () {
    console.log(colors.rainbow("Process completed!"));
});
var result = d1$.subscribe(function (x) {
    console.log(x);
    if (x === 13) {
        result.unsubscribe();
    }
});
