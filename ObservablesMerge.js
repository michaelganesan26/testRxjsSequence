"use strict";
exports.__esModule = true;
//Merge Observables
var RxJs = require("rxjs");
var a$ = RxJs.Observable.interval(10).map(function (i) { return "A" + i; }).take(10);
var b$ = RxJs.Observable.interval(5).map(function (i) { return "B" + i; }).take(10);
RxJs.Observable.merge(a$, b$).subscribe(function (x) {
    console.log(x);
}, function (error) { }, function () {
    console.log('Completed');
});
var data$ = RxJs.Observable.range(1, 10).map(function (x) { return x * 10; });
data$.subscribe(function (x) {
    console.log(x);
});
