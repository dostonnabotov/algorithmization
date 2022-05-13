// in order not to repeat myselft all the time, I am using
// the function that will do for me. It will getElementById
// and set its innerText to value provided
function setId(element, value) {
  return (document.getElementById(element).innerText = value);
}

// function: turn the input value into floating number
function float(element) {
  return parseFloat(element.value);
}

// from Celcius to Fahrenheit
function fromCelToFah(input) {
  let fromCelToFah = (9 / 5) * float(input) + 32;
  setId("result_CtoF", fromCelToFah);
  // same as,
  // document.getElementById('result_CtoF).innerText = fromCeltoFah;
}

// from Fahrenheit to Celcius
function fromFahToCel(input) {
  let fromFahToCel = (9 / 5) * (float(input) - 32);
  setId("result_FtoC", fromFahToCel);
}

// from Celcius to Kelvin
function fromCelToKel(input) {
  let fromCelToKel = float(input) + 273;
  setId("result_CtoK", fromCelToKel);
}

// from Kelvin to Celcius
function fromKelToCel(input) {
  let fromCelToKel = float(input) - 273.15;
  setId("result_KtoC", fromCelToKel);
}

// from Fahrenheit to Kelvin
function fromFahToKel(input) {
  let fromFahToKel = (5 / 9) * (float(input) - 32) + 273.15;
  setId("result_FtoK", fromFahToKel);
}

// from Kelvin to Fahrenheit
function fromKelToFah(input) {
  let fromFahToKel = (9 / 5) * (float(input) - 273.15) + 32;
  setId("result_KtoF", fromFahToKel);
}
