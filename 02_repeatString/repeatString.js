const repeatString = function(str, times) {
    let i = 0;
    result = '';

    while (i < times) {
        result += str;
        i++;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
