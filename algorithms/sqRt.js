// Calculate square root of a given number

function squareRoot(number) {

    if (number === 0 || number === 1) {
        return number;
    }

    var start = 1, end = Math.ceil(number / 2), answer;

    while (start <= end) {
        var mid = parseInt((start + end) / 2);
        var random = mid * mid;
        if (random === number) {
            return mid;
        }
        if (random < number) {
            // If number is greater than multiplied value
            start = mid + 1;
            answer = mid;
        } else {
            // If number is lesser than multiplied value
            end = mid - 1;
        }
    }
    return answer;

}

console.log(squareRoot(1000));