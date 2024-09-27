const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function (array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(a ,b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
  if (a === 0) { return 1; }

  let factorial = 1;
	while (a > 0) {
    factorial *= a;
    a--;
  }
  return factorial;
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
