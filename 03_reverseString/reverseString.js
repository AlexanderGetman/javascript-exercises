const reverseString = function(str) {
    let i = 0;
    let result = '';
    let arr = Array.from(str);

    while (i = arr.length) {
        result += arr.pop();
        i++;
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
