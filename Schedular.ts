/* ===========================
   Description: Schedular 
   Date: 04/02/2018
   Notes: Sample application using a schedular
 
   =========================== */

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/observeOn';
import { Scheduler } from 'rxjs/Scheduler';
import { asap } from 'rxjs/scheduler/asap';

//import 'rxjs';
import * as colors from 'colors';
import { toArray } from 'rxjs/operator/toArray';
import { groupBy } from 'rxjs/operator/groupBy';


//Create a sample array
const myArray: Array<number> = [];

let displayArray = () => {

    myArray.forEach(element => {
        console.log(`${element}`);

    });


}


let displayAsync = (display: boolean) => {

    const currentTime = Date.now();
    Observable.from(myArray, asap).subscribe((x: number) => {
        if (display) {
            console.log(`Value: ${x}`);
        }
    }, (error: Error) => {

        console.log(`Error Message: ${error.message}`);

    }, () => {

        console.log(`Total Time: ${Date.now() - currentTime}ms`);

    });

    console.log("Hi there from Asynchronous!");
}

let displaySynchronous = (display: boolean) => {

    const currentTime = Date.now();
    Observable.from(myArray).subscribe((x: number) => {
        if (display) {
            console.log(`Value: ${x}`);
        }

    }, (error: Error) => {

        console.log(`Error Message: ${error.message}`);

    }, () => {

        console.log(`Total Time: ${Date.now() - currentTime}ms`);

    });

    console.log("Hi there from synchronous! ");
}

let counter=0;
//map the values
let displayObserveOn = () => {

    Observable.from(myArray).groupBy(value => (value % 2) === 0)
    .map(value => value.observeOn(asap))
    .subscribe(groupObserver$ =>{
       console.log(`Your group is: ${++counter}`);
       groupObserver$.subscribe(x=>{
           console.log(`${x}`);
       });
    });
}

const MAX_RANGE: number = 50;

Observable.range(1, MAX_RANGE).subscribe((x: number) => {

    myArray.push(x);

}, (error: Error) => {
    console.log(`Error fill the array: ${error.message}`)
}, () => {
    console.log("Initialized the array");

    displayObserveOn();
});











