const add = function(first, second) {
  return first + second;
	
};

const subtract = function(first, second) {
  return first - second;
	
};

/**
 * 
 * @param {Array} array 
 * @returns 
 */
const sum = function(array) {
  let res = 0;
  for(let i = 0; i < array.length; i++)
  {
    res += array[i];
  }
	return res;
};

const multiply = function(array) {
  let res = 0;
  for(let i = 0; i < array.length; i++)
  {
    if(i === 0)
      res = array[i];
    else 
      res *= array[i];
  }
	return res;
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function(number) {
  let res = 1;
  for(let i = number; i > 1; i--)
  {
    res *= i;
  }
  return res;
	
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
