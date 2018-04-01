"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/range");
const Rxjs = require("rxjs");
let src = Rxjs.Observable.range(1, 5);
let sum = src.reduce((acc, x) => x + acc);
// sum.subscribe(x => {
//     console.log(`The sum for the observable is: ${x}`);
// });
//basic array
console.log('Basic array');
//src.subscribe(x => console.log(x));
console.log("Compute the average of the numbers");
let src2$ = Observable_1.Observable.range(1, 20);
//  src2$.subscribe(x =>{console.log(x)});
let average$ = src2$.reduce((acc, current) => {
    return ({ sum: acc.sum + current,
        count: acc.count + 1, });
}, { sum: 0, count: 0 }).map(result => result.sum / result.count);
//  average$.subscribe(x =>{
//        console.log(`Your total is: ${x}`);
//  });
//Using scan to compute the average
//let src3$ = Observable.interval(5000); //send data every second
// src3$.subscribe(x => {
//     console.log(x);
// });
// let result$ = src3$.scan((previous,current)=>{
//       return(
//           {
//              sum: previous.sum + current,
//              count: previous.count + 1});
//            },{sum:0,count:0}).map(result => result.sum/result.count);
//console.log("Compute the average on every interval");
//  result$.subscribe(x => {
//     console.log(`Your current average is: ${x}`);
//  })
//Combine mutlitple Observables
const values$ = Observable_1.Observable.from([
    Observable_1.Observable.of(1, 2, 3),
    Observable_1.Observable.of(4, 5, 6),
    Observable_1.Observable.of(7, 8, 9)
]);
//values$.subscribe(x=>console.log(x));
//flatmap
values$.flatMap(v => v).subscribe(x => console.log(x));
//use concat all to flaten the array
console.log('Concat all as opposed to flatMap');
values$.concatAll().subscribe(x => console.log(x));
// let average$ = src2$.reduce((previous, current) => {
//     return (
//         {
//             sum: previous.sum + current,
//             count: previous.count + 1
//         }
//     );
// }, { sum: 0, count: 0 }).map(x =>{
//     x.sum/x.count;
// });
// average$.subscribe(x =>{
//    console.log(`Value for the series is: ${x}`);
// });
