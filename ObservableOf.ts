import { Observable } from 'rxjs';



const numbers$ = Observable.of(1,2,3,4);
const letters$ = Observable.of('a','b','c','d');
const interval$ = Observable.interval(300).take(10);


const result$ = Observable.concat(numbers$).concat(letters$).concat(interval$);

result$.subscribe(x => {
    console.log(x);

});





