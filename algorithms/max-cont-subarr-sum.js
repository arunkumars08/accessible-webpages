// Maximum contigous sub array sum
var arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(findMaxContSubArrSum(arr));
function findMaxContSubArrSum(arr) {
    var maxSoFar = Math.min.apply(Math, arr) - 1,
        maxEnding = 0;

    for (var i = 0; i < arr.length; ++ i) {
        maxEnding = maxEnding + arr[i];
        if (maxSoFar < maxEnding) {
            maxSoFar = maxEnding;
        }
        if (maxEnding < 0) {
            maxEnding = 0;
        }
    }

    return maxSoFar;
}