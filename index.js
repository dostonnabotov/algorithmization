// in order not to repeat myselft all the time, I am using
// the function that will do for me. It will getElementById
// and set its innerText to value provided
function setId(element, value) {
  return (document.getElementById(element).innerText = `${check(value)}`);
}

// check if number inserted in input is decimal or integer
// if integer, return the integer value,
// else set fixed limit for decimal value.
// e.g. 15.347394 => 15.347
function check(element) {
  if (Number.isInteger(element)) {
    return element;
  }
  return element.toFixed(3);
}

// function: turn the input value into floating number
function float(element) {
  return parseFloat(element.value);
}

// from Celcius to Fahrenheit
function fromCelToFah(input) {
  let fromCelToFah = (9 / 5) * float(input) + 32 || 0;
  setId("result_CtoF", fromCelToFah);
  // same as,
  // document.getElementById('result_CtoF).innerText = fromCeltoFah;
}

// from Fahrenheit to Celcius
function fromFahToCel(input) {
  let fromFahToCel = (9 / 5) * (float(input) - 32) || 0;
  setId("result_FtoC", fromFahToCel);
}

// from Celcius to Kelvin
function fromCelToKel(input) {
  let fromCelToKel = float(input) + 273 || 0;
  setId("result_CtoK", fromCelToKel);
}

// from Kelvin to Celcius
function fromKelToCel(input) {
  let fromCelToKel = float(input) - 273.15 || 0;
  setId("result_KtoC", fromCelToKel);
}

// from Fahrenheit to Kelvin
function fromFahToKel(input) {
  let fromFahToKel = (5 / 9) * (float(input) - 32) + 273.15 || 0;
  setId("result_FtoK", fromFahToKel);
}

// from Kelvin to Fahrenheit
function fromKelToFah(input) {
  let fromFahToKel = (9 / 5) * (float(input) - 273.15) + 32 || 0;
  setId("result_KtoF", fromFahToKel);
}

// Area and Perimeter of Square
function square(input) {
  let square_area = float(input) * float(input) || 0;
  let square_perimeter = float(input) * 4 || 0;
  setId("square_area", square_area);
  setId("square_perimeter", square_perimeter);
}

// Area and Perimeter of Circle
function circle(input) {
  let circle_area = float(input) * float(input) * (22 / 7) || 0;
  let circle_perimeter = float(input) * 2 * (22 / 7) || 0;
  setId("circle_area", circle_area);
  setId("circle_perimeter", circle_perimeter);
}

// Area and Perimeter of Rectangle
function rectangle(length, breadth) {
  let rectangle_area = float(length) * float(breadth) || 0;
  let rectangle_perimeter = (float(length) + float(breadth)) * 2 || 0;
  setId("rectangle_area", rectangle_area);
  setId("rectangle_perimeter", rectangle_perimeter);
}

function triangle(a, b, c) {
  let sum = float(a) + float(b) + float(c);
  let s = sum / 2;
  let tri_peri_operation = s * (s - float(a)) * (s - float(b)) * (s - float(c));
  let triangle_area = Math.sqrt(tri_peri_operation) || 0;
  let triangle_perimeter = sum || 0;
  setId("triangle_area", triangle_area);
  setId("triangle_perimeter", triangle_perimeter);
}
