"use strict";
exports.__esModule = true;
//Merge Observables
var RxJs = require("rxjs");
var a$ = RxJs.Observable.interval(10).map(function (i) { return "A" + i; }).take(10);
var b$ = RxJs.Observable.interval(5).map(function (i) { return "B" + i; }).take(10);
// RxJs.Observable.merge(a$,b$).subscribe(x=>{
//     console.log(x);
// },(error)=>{},()=>{
//    console.log('Completed');
// });
RxJs.Observable.merge(a$, b$).flatMap(function (x) { return x; }).subscribe(function (x) { return console.log(x); });
// const data$ = RxJs.Observable.range(1,10).map(x=> x*10);
// const event$ = data$.filter(x => ((x/10) % 2) === 0);
// event$.subscribe(x => {
//   console.log(`Value is Event: ${x}`);
// });
// data$.subscribe(x=>{
//     console.log(x);
// });
