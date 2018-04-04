
/* ===========================
   Description: Sample Application using group by
   Date: 04/04/2018
   Notes: Using groupby for Observables
 
   =========================== */

   import { Observable } from 'rxjs/Observable';
   import 'rxjs/add/observable/range';
   import 'rxjs/add/operator/map';
   import 'rxjs/add/observable/from';
   import 'rxjs/add/operator/observeOn';
   import { Scheduler } from 'rxjs/Scheduler';
   import { asap } from 'rxjs/scheduler/asap';
   //import 'rxjs/add/observable/toArray';
   import 'rxjs/add/operator/toArray';
   import 'rxjs/add/operator/groupBy';
   import 'rxjs/add/operator/mergeMap';
   import 'rxjs/add/operator/reduce';
   import 'rxjs/add/operator/first';
   import 'rxjs/add/operator/filter';
   

   //import 'rxjs';
   import * as colors from 'colors';
   
  interface IPerson{
     name:string;
     age:number;
  }

  const testStream$ = Observable.range(1,10).first();

   testStream$.subscribe(x=>{
       console.log(`This is the first item of the array: ${x}`);
   });


   const people:IPerson[] = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
  ]; 

  //flatMap and merge Map is the same

  let example$ = Observable.from(people).groupBy(person=> person.age)
  .mergeMap(group => group.reduce((acc, curr) => [...acc, curr], []));


  let printArray = (ageFilter:number,array:IPerson[])=>{

       if(array.length>0 && array[0].age===ageFilter){

           console.log(array);
       }
  } 


  example$.subscribe((x:IPerson[])=> {
       printArray(30,x);
  });





 



