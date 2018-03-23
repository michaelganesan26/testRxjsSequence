"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var array = [];
var arraySubject = new rxjs_1.Subject();
var data$ = rxjs_1.Observable.interval(800);
data$.subscribe(function (x) {
    array.push(x);
    arraySubject.next(x);
});
arraySubject.subscribe(function (x) {
    console.log("Array length " + array.length);
});
