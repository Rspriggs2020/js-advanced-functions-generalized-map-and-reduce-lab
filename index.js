function map(number, source) {
    const array = []
    for (let i = 0; i < number.length; i ++) {
        const newArray = number[i];
        array.push(source(newArray))
    };
    return array
}

function reduce(number, source, startingValue) {
    let total;
    if (startingValue) {
        total = startingValue;
        for (let i = 0; i < number.length; i ++){
            total = source(number[i], total);
        }
        return total;
    }   else {
        total = number[0];
        for (let i = 1; i < number.length; i++) {
            total = source(number[i], total);
        }
        return total;
    }
}
