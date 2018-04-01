"use strict";
//This is a test of running the code runing asychronous
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
var getCustomer = (customer) => {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (customer > 2500) {
                resolve(`The customer qualifies for an increase in credit!!`);
            }
            else {
                reject('The customer does not qualify for a credit increase');
            }
        }, 5000);
    });
    return (myPromise);
};
var testCode = (customer) => {
    getCustomer(customer).then((success) => {
        console.log(colors.magenta(`Success, ${success}`));
    }, (reject) => {
        console.log(colors.yellow(`Failed, ${reject}`));
    });
};
testCode(3000);
console.log('Executed test code with 3000');
testCode(2500);
console.log('Executed test code with 2500');
