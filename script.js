function simpleCurry () {
    var args = Array.prototype.slice.call(arguments);
    var sum = 0;
    sum = args.reduce(function (a, b) {
        return a + b;
    }, 0);
    function inner () {
        console.log(arguments.length);
        var innerArgs = Array.prototype.slice.call(arguments);
        sum += innerArgs.reduce(function (a, b) {
            return a + b;
        }, 0);
        return arguments.length > 0 ? inner : sum;
    }
    return inner;
}