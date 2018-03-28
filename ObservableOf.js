"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var numbers$ = rxjs_1.Observable.of(1, 2, 3, 4);
var letters$ = rxjs_1.Observable.of('a', 'b', 'c', 'd');
var interval$ = rxjs_1.Observable.interval(300).take(10);
var result$ = rxjs_1.Observable.concat(numbers$).concat(letters$).concat(interval$);
result$.subscribe(function (x) {
    console.log(x);
});
