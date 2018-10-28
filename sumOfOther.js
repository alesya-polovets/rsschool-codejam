function sumOfOther (arr) {
    let result = [];
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        result.push(arr.reduce(function (sum, current) {return sum + current;}) - arr[i]);
    }
    return result;
}