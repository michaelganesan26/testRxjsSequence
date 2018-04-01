"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/range");
const Rxjs = require("rxjs");
let getJson = (data) => {
    return (Observable_1.Observable.from(data).map(x => JSON.parse(x)));
};
const caught$ = getJson(['{"1": 1, "2": 2}', '{"1:1}']).catch(val => Rxjs.Observable.of(`I caught ${val} error`));
caught$.subscribe(json => console.log("Parsed JSON: ", json), (error) => console.log(error.message), () => {
    console.log("completed");
});
