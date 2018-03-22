import { Observable } from 'rxjs/Observable';
import 'rxjs';
import * as colors from 'colors';






let d1$ = Observable.interval(500).do(x => {
    console.log(colors.green(`Current Value is: ${x}`));
},
    (error) => {
        console.log(colors.magenta("Sorry your observable encountered an error"));
    },
    () => {
        console.log(colors.rainbow("Process completed!"));
    }
);



let result = d1$.subscribe(x => {
    console.log(x);
    if (x === 13) {
        result.unsubscribe();
    }
});




