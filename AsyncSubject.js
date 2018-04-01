"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const delayedRange$ = rxjs_1.Observable.range(0, 5).delay(2000);
const subject$ = new rxjs_1.AsyncSubject(); //Will only return the last value from the observable
delayedRange$.subscribe(subject$);
// let myList$ = delayedRange$.subscribe(x=>{
//       console.log(x);   
// });
//Will return the last value from the observable
subject$.subscribe(x => {
    console.log(`Next: ${x}`);
}, (error) => {
    console.log(`Error: ${error.message}`);
}, () => {
    console.log('Process completed!');
});
