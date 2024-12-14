//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
// include your styles into the webpack bundle
import "../styles/index.css";

import SimpleCounter from "./component/simpleCounter";

let counter = 0;

setInterval(() => {
const one = Math.floor(counter / 1) % 10;
const two = Math.floor(counter / 10) % 10;
const three = Math.floor(counter / 100) % 10;
const four = Math.floor(counter / 1000) % 10;
const five = Math.floor(counter / 10000) % 10;
const six = Math.floor(counter / 100000) % 10;
counter++

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(
<SimpleCounter
digitOne = {one}
digitTwo = {two}
digitThree = {three}
digitFour = {four}
digitFive = {five}
digitSix = {six}
/>
);
}, 1000);
