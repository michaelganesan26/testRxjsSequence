"use strict";
/* ===========================
   Description: Schedular with ObserverOn
   Date: 04/05/2018
   Notes: Testing observeon
 
   =========================== */
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
var asap_1 = require("rxjs/scheduler/asap");
require("rxjs/add/operator/observeOn");
require("rxjs/add/observable/range");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
console.log('Before subscription');
Observable_1.Observable.range(1, 5)["do"](function (value) {
    console.log("Processing " + value);
}).observeOn(asap_1.asap).map(function (value) { return Math.pow(value, 2); })
    .subscribe(function (x) {
    console.log("Emitted value: " + x);
});
console.log("After subscription");
