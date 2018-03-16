import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/range";

import * as Rxjs from 'rxjs';

let getJson = (data:any)=>{
     
    return(Observable.from(data).map(x=> JSON.parse));

}

let data = ['{"1": 1, "2": 2}'​, ​'{"1: 1}'];

const caught$ = getJson(data).catch(
     Observable.of({error: "Sorry JSON Error"}));









