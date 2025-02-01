const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;

  let round = celsius.toFixed(1);
  return round = Number(round);

};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = 9/5*celsius + 32;
  let round = fahrenheit.toFixed(1);
  return round = Number(round);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
