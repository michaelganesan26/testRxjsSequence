
import *  as fs from 'fs';
import *  as  path from 'path';
import { Observable } from 'rxjs/Observable';
import "rxjs/observable/bindNodeCallback";

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

const readdir$ = Observable.bindNodeCallback(fs.readdir);






