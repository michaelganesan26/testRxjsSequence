const fs = require('fs');
const RX = require('rxjs');
const path = require('path');

const filename = path.join(__dirname);

let readdir$ = RX.Observable.bindNodeCallback(fs.readdir);

let source$ = readdir$(filename);

let getFiles = (file)=>{
    let tempFile = path.join(__dirname,file);
    fs.stat(tempFile,(err,stats)=>{

       if(stats.isDirectory()){
           fs.readdir(tempFile,(error,xfiles)=>{
               xfiles.forEach((x)=>{
                  console.log(x);
               });
           });
       }
       else{
           console.log(file);
       }
    });
}



source$.subscribe((files)=>{
     console.log(`Total Files: ${files.length}`);
     files.forEach(file=>{
        getFiles(file);
        console.log(file);
        
        // fs.stat(path.join(__dirname,file),(error,stat)=>{
        //      if(stat.isDirectory()){
        //          console.log(`Directory ${file}`);
        //      }
        // });
     });

},(error)=>{
    console.log("Sorry failed to retrieve the files");
},()=>{
    console.log('Process completed');
});






