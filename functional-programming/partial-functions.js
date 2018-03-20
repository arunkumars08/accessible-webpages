// Writing partial functions

// Convert toLowerCase

var curry = function (fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        args.unshift();
        return fn.bind.apply(fn, [null].concat(args));
    }
}

// const curry = fn => (...args) => fn.bind(null, ...args);

// var toLowerCase = function (str) {
//     return str.toLowerCase();
// }

// var map = function (fn) {
//     return curry(fn, )
// }

const map = curry((fn, arr) => arr.map(fn));

const join = curry((str, arr) => arr.join(str));

const toLowerCase = str => str.toLowerCase();

const split = curry((splitOn, str) => str.split(splitOn));

const toSlug = input => encodeURIComponent(
    join('-')(
      map(toLowerCase)(
        split(' ')(
          input
        )
      )
    )
  );
  
  console.log(toSlug('JS Cheerleader')); // 'js-cheerleader'