"use strict";
exports.__esModule = true;
var colors = require("colors");
var getCustomer = function (customer) {
    var myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (customer > 2500) {
                resolve("The customer qualifies for an increase in credit!!");
            }
            else {
                reject('The customer does not qualify for a credit increase');
            }
        }, 5000);
    });
    return (myPromise);
};
var testCode = function (customer) {
    getCustomer(customer).then(function (success) {
        console.log(colors.magenta("Success " + success));
    }, function (reject) {
        console.log(colors.yellow("Failed " + reject));
    });
};
testCode(3000);
console.log('Executed test code with 3000');
testCode(2500);
console.log('Executed test code with 2500');
