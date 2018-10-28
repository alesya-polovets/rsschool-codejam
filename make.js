function make (...args) {
    let arr = [];
    function check (...args) {
        if (typeof args[0] !== 'function') {
            arr.push(...args);
            return check;
        }
        else {
            return arr.reduce(function (sum, current) {return sum + current;});
        }
    }
    check(...args);
    return check;
}