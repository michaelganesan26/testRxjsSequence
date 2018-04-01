"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const subject$ = new rxjs_1.Subject();
const source$ = rxjs_1.Observable.interval(300).map(v => `Interval message ${v}`).take(5);
source$.subscribe(subject$);
subject$.subscribe(next => {
    console.log(`Next: ${next}`);
}, (error) => {
    console.log(`Error: ${error.message}`);
}, () => {
    console.log(`Process completed!`);
});
subject$.next('Our message: #1');
subject$.next('Our message #2');
//send complete after 1000 miliseconds
setTimeout(() => {
    subject$.complete();
}, 1000);
