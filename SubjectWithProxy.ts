
import { Observable, Subject } from 'rxjs';

import * as colors from 'colors';


const subject$ = new Subject();

const source$ = Observable.interval(300).map(v => `Interval message ${v}`).take(5);


source$.subscribe(subject$);

subject$.subscribe(next => {
    console.log(`Next: ${next}`)
},
    (error) => {
        console.log(`Error: ${error.message}`)
    },
    () => {
        console.log(`Process completed!`);
    }
)

subject$.next('Our message: #1');
subject$.next('Our message #2');






//send complete after 1000 miliseconds
setTimeout(()=>{
     subject$.complete();
},1000);
