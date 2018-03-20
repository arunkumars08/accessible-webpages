// Simple Promises

var promise = new Promise(promiseFunction);
var promise2 = new Promise(secondPromise);

function promiseFunction(resolve, reject) {
    setTimeout(function () {
        resolve({
            error: 'This is a random error'
        });
    }, 3000);
}

function secondPromise(resolve, reject) {
    setTimeout(function() {
        resolve(23);
    }, 6000);
}

Promise.all([promise, promise2]).then(function (results) {
    console.log(results);
}).catch(function (message) {
    console.log(message);
});

// promise.then(function(result) {
//     console.log(result);
// }).catch(function(message) {
//     console.log(message);
// });

// promise2.then(function(result) {
//     console.log(result);
// }).catch(function(message) {
//     console.log(message);
// });

