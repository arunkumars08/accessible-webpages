// Shuffle a deck of cards

const shuffleCards = (arr) => {
    for (var i = 0; i < arr.length; ++ i) {
        var r = i + parseInt(Math.random() * 52 - i);
        var temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
    }
    return arr;
}

const driver = () => {
    let arr = Array.apply(null, {
        length: 53
    }).map(Number.call, Number);

    console.log('Before Shuffle');
    console.log(arr);
    console.log('After Shuffle');
    console.log(shuffleCards(arr));
}

driver();
