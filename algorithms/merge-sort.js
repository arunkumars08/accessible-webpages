// Merge Sort

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    var mid = parseInt(arr.length / 2);
    
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid, arr.length));

    return merge(left, right);
}

function merge(left, right) {
    if (!left) {
        return right;
    }
    if (!right) {
        return left;
    }

    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

function driver() {
    var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    console.log(mergeSort(a));
}

driver();
