import { Observable } from 'rxjs';
/* ===========================
   Description: Test Product Service using Observable
   Date: 04/05/2018
   Notes: Testing Procuct Service
 
   =========================== */



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

   interface IProduct{
        id:number;
        description:string;
        price:number;

   }


  let _products:IProduct[]= [];


   //Create a list of products 

   Observable.range(1,10).subscribe((productId:number) =>{

        _products.push({id:productId,description:`X${productId}`,price:Math.round(parseFloat(`${productId*8.9}`))});

    },(error)=>{

     console.log(`Sorry an error has occurred! ${error}`);

    },()=>{

        //Process completed
        console.log(`Total elements generated was ${_products.length}`);

        // Observable.from(_products).subscribe(x => {

        //     //console.log(x);

        // });

    });

  let product$ = Observable.from(_products).map((product:IProduct) =>{

     return([product]);


  });


  product$.subscribe(x=>{

    console.log(x);

  });
  

























