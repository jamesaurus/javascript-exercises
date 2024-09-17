const convertToCelsius = function(temp) {
  const celcius = (temp - 32) * (5/9);
  const rounded = Math.round(celcius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temp) {
  const fahrenheit = temp * (9/5) + 32;
  const rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
