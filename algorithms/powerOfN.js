// Calculate power of n

function powerOfN(x, n) {
    if (n === 0) {
        return 1;
    }

    var store = powerOfN(x, parseInt(n / 2));

    if (n % 2 === 0) {
        return store * store;
    } else {
        return x * store * store;
    }
}


console.log(powerOfN(1000, 100));