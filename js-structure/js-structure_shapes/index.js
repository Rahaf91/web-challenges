import Circle from "./components/Circle/Circle.js";
import Pentagon from "./components/Pentagon/Pentagon.js";
import Square from "./components/Square/Square.js";
console.clear();

const root = document.getElementById("root");

const circle = Circle();
const square = Square();
const pentagon = Pentagon();
root.append(circle, square, pentagon);
