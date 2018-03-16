import { Observable } from 'rxjs/Observable';
//Merge Observables
import *  as RxJs from 'rxjs';



let a$ = RxJs.Observable.interval(10).map(i => `A${i}`).take(10);
let b$ = RxJs.Observable.interval(5).map(i => `B${i}`).take(10);

// RxJs.Observable.merge(a$,b$).subscribe(x=>{
//     console.log(x);
// },(error)=>{},()=>{
//    console.log('Completed');

// });

RxJs.Observable.merge(a$,b$).flatMap(x => x).subscribe(x => console.log(x));




// const data$ = RxJs.Observable.range(1,10).map(x=> x*10);

// const event$ = data$.filter(x => ((x/10) % 2) === 0);


// event$.subscribe(x => {
//   console.log(`Value is Event: ${x}`);
// });

// data$.subscribe(x=>{
//     console.log(x);
// });





