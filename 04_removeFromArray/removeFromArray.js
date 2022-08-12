const removeFromArray = function(arr, ...args) {
    let array = arr;
    let toRemove = args;
    let result = array.filter((item) => !toRemove.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;