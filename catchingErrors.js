"use strict";
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/range");
var Rxjs = require("rxjs");
var getJson = function (data) {
    return (Observable_1.Observable.from(data).map(function (x) { return JSON.parse(x); }));
};
var caught$ = getJson(['{"1": 1, "2": 2}', '{"1:1}'])["catch"](function (val) { return Rxjs.Observable.of("I caught " + val + " error"); });
caught$.subscribe(function (json) { return console.log("Parsed JSON: ", json); }, function (error) { return console.log(error.message); }, function () {
    console.log("completed");
});
