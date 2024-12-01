'use strict';

let promise = new Promise((resolve, reject) => {

   //reject(new Error("ignored"));
   //resolve("result");
   //reject(new Error("ignored"));

   setTimeout(() => resolve("result"), 1000);
   setTimeout(() => reject(new Error("ignored")), 2000);

});

promise
  .then(
    result => console.log("Fulfilled: " + result), 
    error => console.log("Rejected: " + error) 
  );

