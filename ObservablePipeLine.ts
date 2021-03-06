
import { Observable } from 'rxjs/Observable';
import "rxjs";
import * as colors from "colors";



const MAXValue = 10;
const MINValue = 1;
let data$ = Observable.range(MINValue, MAXValue);
console.log(colors.magenta('Test Code'));

let x$ = Observable.from(data$).filter((x: number, index: number) => {
    if (x % 2 === 0) {
        return true;
    }
    return false;

}).map(x => x * 10);


x$.subscribe(x => {
    console.log(`Your value is ${colors.magenta(x.toString())}`);

});

//let counter:number = 0;

let updateTicks = (acc: number, x: number) => {

    if (x % 2 === 0) {
        acc++;
    }
    return (acc);
}


//Execute statements

// const ticks$ = Observable.interval(1000).map(updateTicks).distinct();

// let test$ = ticks$.subscribe(x=>{
//     console.log(`Your current tick is: ${colors.yellow(counter.toString())}`);

//     if(counter === 13){

//         test$.unsubscribe();
//     }
// });


//using scan to send the variable and eliminate external reference

//const ticks$ = Observable.interval(500).scan(updateTicks,0);  //no reliance on external variables

const ticks$ = Observable.interval(500).scan(updateTicks, 0).distinct(); //this eliminates repeats

const t1 = ticks$.subscribe(eventTicks => {

    console.log(colors.magenta(`t2 stream: ${eventTicks}`));

    if (eventTicks === 13) {
        t1.unsubscribe();
    }
});

const t2 = ticks$.subscribe(eventTicks => {

    console.log(colors.yellow(`t2 stream: ${eventTicks}`));

    if (eventTicks === 14) {
        t2.unsubscribe();
    }
});















