function setId(element, value) {
  return (document.getElementById(element).innerText = value);
}

function float(element) {
  return parseFloat(element.value);
}

// Area and Perimeter of Square
function square(input) {
  let square_area = float(input) * float(input) || 0;
  let square_perimeters = float(input) * 4 || 0;
  setId("square_area", square_area);
  setId("square_perimeter", square_perimeters);
}

// Area and Perimeter of Circle
function circle(input) {
  let circle_area = float(input) * float(input) * (22 / 7) || 0;
  let circle_perimeters = float(input) * 2 * (22 / 7) || 0;
  setId("circle_area", circle_area);
  setId("circle_perimeter", circle_perimeters);
}

// Area and Perimeter of Rectangle
function rectangle(length, breadth) {
  console.log(float(length));
  let rectangle_area = float(length) * float(breadth) || 0;
  let rectangle_perimeters = (float(length) + float(breadth)) * 2 || 0;
  setId("rectangle_area", rectangle_area);
  setId("rectangle_perimeter", rectangle_perimeters);
}

// Area and Perimeter of Triangle
function triangle(t_A, t_B, t_C) {
  console.log(float(t_A));
  let sides = (float(t_A) + float(t_B) + float(t_C)) / 2;
  let triangle_area =
    Math.sqrt(sides * (sides - float(t_A)) * (sides - float(t_B)) * (sides - float(C))) || 0;
  let triangle_perimeters = float(t_A) + float(t_B) + float(t_C) || 0;
  setId("triangle_area", triangle_area);
  setId("triangle_perimeter", triangle_perimeters);
}
