/* ===========================
   Description: Sample Application for RxJs.ReplayObject    
   Date: 03/29/2018
   Notes: This will only display the values within a give time,
   this is how you can use it to cache the values 
 
   =========================== */



import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs';
import * as colors from 'colors';

const TIME:number = 3000;

const subject$ = new ReplaySubject(null,1000);


setTimeout(() => {
    subject$.next(1);
}, 500);


setTimeout(() => {
    subject$.next(2);
}, 600);

setTimeout(() => {
    subject$.next(3);
}, 700);

setTimeout(() => {
    subject$.subscribe((next:any)=>{
        console.log(`Your value is: ${next}`);

    });

}, 1000);


















