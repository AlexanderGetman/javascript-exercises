const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let result = 0;
  for (num of arr) {
    result = result + num;
  }

  return result;
};

const multiply = function(arr) {
	let result = 1;
  for (num of arr) {
    result = result * num;
  }

  return result;
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
