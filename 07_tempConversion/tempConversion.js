const convertToCelsius = function(f) {

  //x °F ≘ (x − 32) × ⁠5/9°C
  let c = (f -32)*5/9
  return Math.round(c *10)/10
};

const convertToFahrenheit = function(c) {

  //C ≘ (x × ⁠9/5 + 32) °F

  let f = (c*9/5+32)
  return Math.round(f*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
