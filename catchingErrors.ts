import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/range";

import * as Rxjs from 'rxjs';

let getJson = (data:any)=>{   
    return(Observable.from(data).map(x=> JSON.parse(<string>x)))}

const caught$ = getJson(['{"1": 1, "2": 2}'​, ​'{"1:1}']).catch(val => Rxjs.Observable.of(`I caught ${val} error`));


caught$.subscribe(json=>console.log("Parsed JSON: ",json),
(error)=>console.log(error.message),()=>{
    console.log("completed");

});


    








