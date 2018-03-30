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
var subject$ = new ReplaySubject_1.ReplaySubject(null, 200);
setTimeout(function () {
    subject$.next(1);
}, 100);
setTimeout(function () {
    subject$.next(2);
}, 200);
setTimeout(function () {
    subject$.next(3);
    subject$.next(6);
}, 300);
setTimeout(function () {
    subject$.subscribe(function (next) {
        console.log("Your value is: " + next);
    });
    subject$.next(5);
}, 350);
