"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/observeOn");
require("rxjs/add/observable/range");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var _products = [];
//Create a list of products 
rxjs_1.Observable.range(1, 10).subscribe(function (productId) {
    _products.push({ id: productId, description: "X" + productId, price: Math.round(parseFloat("" + productId * 8.9)) });
}, function (error) {
    console.log("Sorry an error has occurred! " + error);
}, function () {
    //Process completed
    console.log("Total elements generated was " + _products.length);
    // Observable.from(_products).subscribe(x => {
    //     //console.log(x);
    // });
});
var product$ = rxjs_1.Observable.from(_products).map(function (product) {
    return ([product]);
});
product$.subscribe(function (x) {
    console.log(x);
});
