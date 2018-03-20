// Simple currying

// function curry (fn, ...args) {
//     var fnLen = fn.length;
//     var a = [...args];
//     return function inner (...iArgs) {
//         var i = [...iArgs];
//         if (a.length + i.length === fnLen) {
//             return fn.apply(null, a.concat(i));
//         } else {
//             a = a.concat(i);
//             return inner;
//         }
//     }
// }

// var sum = function (a, b, c) {
//     console.log(a + b + c);
// };





const curry = (fn, ...args) => {
    var fnLen = fn.length;
    var main = [...args];
    var argsLen = main.length;

    if (fnLen === argsLen) {
        return fn.apply(null, main);
    }
    return inner = (...a) => {
        main = main.concat([...a]);
        if (fnLen === main.length) {
            return fn.apply(null, main);
        }
        return inner;
    }
};

var sum = function (a, b, c) {
    console.log(a + b + c);
};

// var printAll = function (fn1, fn2, fn3) {
//     return f1() + f2() + f3();
// }

// const f1 = () => 'Hi ';
// const f2 = () => 'I am  ';
// const f3 = (name) => `${name ? name : 'Arun'}`;



// var awaitingName = curry(printAll, f1, f2);

// var full = awaitingName(f3);

// console.log(full);

// var s = curry(sum, 1, 2);
// s(10);


// const cars = [{
//     name: 'TATA Motors',
//     country: 'India'
// }, {
//     name: 'Ferrari',
//     country: 'Italy'
// }, {
//     name: 'Aston Martin',
//     country: 'England'
// }];

// // Let's use simply curry to get those from 'England'

// const getCarsByCountry =
//                         cars => 
//                                 country => 
//                                             cars.filter(car => car.country === country);

// console.log(getCarsByCountry(cars)('England')); // [ { name: 'Aston Martin', country: 'England' } ]







































