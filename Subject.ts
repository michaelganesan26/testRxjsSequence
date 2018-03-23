//import { Observable } from 'rxjs/Observable';
import { } from 'rxjs/es'
import * as colors from 'colors'
import { Subject,Observable } from 'rxjs';

let array:number[] = [];

let arraySubject = new Subject();

let data$ = Observable.interval(800);


data$.subscribe(x => {
      array.push(x);
      arraySubject.next(x);
});

arraySubject.subscribe(x => {
    console.log(`Array length ${array.length}`);

});










