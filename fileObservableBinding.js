"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var Observable_1 = require("rxjs/Observable");
require("rxjs/observable/bindNodeCallback");
var filePath = path.join(__dirname);
console.log(filePath);
// fs.readdir(filePath, (error, files) => {
//     if (error) {
//         console.log('Sorry failed to retrieve files!!');
//         process.exit(100);
//     }
//     files.forEach((x) => {
//         console.log(x);
//     });
// });
var readdir$ = Observable_1.Observable.bindNodeCallback(fs.readdir);
