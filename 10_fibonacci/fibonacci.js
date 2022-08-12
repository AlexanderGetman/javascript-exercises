const fibonacci = function(num) {
    let n1 = 0, n2 = 1, next;

    if (num < 0) {
        return "OOPS";
    }

    for (let i = 1; i <= num; i++) {
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }

    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
