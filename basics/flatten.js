// Flatten an array

const flatten = (arr) => {
    let result = [];
    for (var i = 0; i < arr.length; ++ i) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

const driver = () => {
    let arr = [[1, 2, 3], 4, [5, [6, 7]]];
    console.log(flatten(arr));
}

driver();
