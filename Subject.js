"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
let array = [];
let arraySubject = new rxjs_1.Subject();
let data$ = rxjs_1.Observable.interval(800);
data$.subscribe(x => {
    array.push(x);
    arraySubject.next(x);
});
arraySubject.subscribe(x => {
    console.log(`Array length ${array.length}`);
});
