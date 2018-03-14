//This is a code related to customers
const colors = require('colors');


function getOrders(customer){

   let promise = new Promise((resolve,reject)=>{

     setTimeout(()=>{
        if(customer > 2500){
           resolve('Customer has more than $2500 in cash ');
        }
        else{
           reject("Customer has less than $2500 in cash, failed test");
        }
     },3000);
   });

  return(promise);
}


getOrders(3400).then((result)=>{
    console.log(`Success ${result}`);
},(result)=>{
    console.log(`Failed for the following reason: ${result}`);
});

getOrders(1800).then((result)=>{
    console.log(`Success ${result}`);
},(result)=>{
    console.log(`Failed for the following reason: ${result}`);
});

console.log(colors.magenta("running the process"));
