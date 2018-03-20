// Repeat array

function repeatArray(arr, times) {
    if (times <= 1) return arr;
    return arr.concat(repeatArray(arr, times - 1));
}
