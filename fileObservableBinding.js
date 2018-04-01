"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const Observable_1 = require("rxjs/Observable");
require("rxjs/observable/bindNodeCallback");
const filePath = path.join(__dirname);
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
const readdir$ = Observable_1.Observable.bindNodeCallback(fs.readdir);
