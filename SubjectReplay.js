"use strict";
/* ===========================
   Description: Sample Application for RxJs.ReplayObject
   Date: 03/29/2018
   Notes: This will only display the values within a give time,
   this is how you can use it to cache the values
 
   =========================== */
exports.__esModule = true;
var ReplaySubject_1 = require("rxjs/ReplaySubject");
require("rxjs");
var TIME = 3000;
var subject$ = new ReplaySubject_1.ReplaySubject(null, 1000);
setTimeout(function () {
    subject$.next(1);
}, 500);
setTimeout(function () {
    subject$.next(2);
}, 600);
setTimeout(function () {
    subject$.next(3);
}, 700);
setTimeout(function () {
    subject$.subscribe(function (next) {
        console.log("Your value is: " + next);
    });
}, 1000);
