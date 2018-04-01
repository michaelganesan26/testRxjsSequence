"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const numbers$ = rxjs_1.Observable.of(1, 2, 3, 4);
const letters$ = rxjs_1.Observable.of('a', 'b', 'c', 'd');
const interval$ = rxjs_1.Observable.interval(300).take(10);
const result$ = rxjs_1.Observable.concat(numbers$).concat(letters$).concat(interval$);
result$.subscribe(x => {
    console.log(x);
});
