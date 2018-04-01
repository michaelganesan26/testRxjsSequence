/*
Intro: Behavior used as a place holder        
Created by: Michael Ganesan
Date: current 03/28/2018
*/

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs';

interface IData{
   id:number;
   data?:string;

}



const subject$ = new BehaviorSubject<IData>({id:0,data:"Waiting for Data"});

subject$.subscribe((next: any) => {
    console.log(`Your new value is: ${next.data}`);

})


const tracker$ = Observable.create((observer:any) => {
    let counter: number = 0;
    setInterval(() => {
        counter++;
        //let message = `Data: ${counter}`;
        observer.next({id:counter,data:`Streaming: ${counter}`});
    }, 3000);
});

tracker$.subscribe(subject$);












