"use strict";
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/range");
var getJson = function (data) {
    return (Observable_1.Observable.from(data).map(function (x) { return JSON.parse; }));
};
var data = ['{"1": 1, "2": 2}', '{"1: 1}'];
var caught$ = getJson(data)["catch"](Observable_1.Observable.of({ error: "Sorry JSON Error" }));
