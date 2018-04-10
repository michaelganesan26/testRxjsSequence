
/* ===========================
   Description: Schedular with ObserverOn
   Date: 04/05/2018
   Notes: Testing observeon
 
   =========================== */


import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import * as colors from 'colors';
import * as _ from "lodash";
import { Scheduler } from 'rx';
import { asap } from 'rxjs/scheduler/asap';
import { queue } from 'rxjs/scheduler/queue';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


console.log('Before subscription');
Observable.range(1, 5).do(value => {

    console.log(`Processing ${value}`);

}).observeOn(asap).map(value => Math.pow(value,2))
.subscribe(x=>{
    console.log(`Emitted value: ${x}`);

});

console.log("After subscription");


    






