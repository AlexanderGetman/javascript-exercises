const sumAll = function(num1, num2) {
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    
    function getMinOfArray(numArray) {
        return Math.min.apply(null, numArray);
    }

    let arr = Array.from(arguments);

    for (num of arr) {
        if (num < 0 || typeof(num) != "number") {
            return "ERROR";
        }
    }

    let start = getMinOfArray(arr);
    let finish = getMaxOfArray(arr);
    let result = 0;

    let i = start;
    while (i < finish + 1) {
        result += i;
        i++;
    }
    
    return result;
};

// Do not edit below this line
module.exports = sumAll;
