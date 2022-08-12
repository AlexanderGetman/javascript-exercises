const palindromes = function (str) {
    let redact = /[\W_]/g;
    let redacted = str.toLowerCase().replace(redact, '');
    let reversed = redacted.split('').reverse().join('');
    return reversed === redacted;
};

// Do not edit below this line
module.exports = palindromes;
