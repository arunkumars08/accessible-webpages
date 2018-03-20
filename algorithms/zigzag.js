/**
 A sequence of integers is called a zigzag sequence if each of its elements is either strictly less than all its neighbors or strictly greater than all its neighbors. For example, the sequence 4 2 3 1 5 3 is a zigzag, but 7 3 5 5 2 and 3 8 6 4 5 aren't. Sequence of length 1 is also a zigzag. 
 */

function isZigZag(arr) {
    if (!arr) return;

    if (arr.length === 1) {
        return true;
    }

    var len = arr.length, flag = true;
    for (var i = 1; i < len - 1; ++ i) {
        if (!(
            (isGreater(arr[i - 1], arr[i]) && isGreater(arr[i + 1], arr[i])) ||
            (isLesser(arr[i - 1], arr[i]) && isLesser(arr[i + 1], arr[i]))
        )) {
            return false;
        }
    }
    return true;
}

function isGreater(a, b) {
    return a > b;
}

function isLesser(a, b) {
    return a < b;
}