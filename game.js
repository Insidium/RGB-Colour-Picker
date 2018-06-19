var colours = generateRandomColours(6);

var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colourDisplay.textContent = pickedColour;

for (var i = 0; i < squares.length; i++) {
  // add initial colours to squares
  squares[i].style.backgroundColor = colours[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    // grab colour of clicked square
    var clickedColour = this.style.backgroundColor;
    // compare colour to pickedColour
    if (clickedColour === pickedColour) {
      messageDisplay.textContent = "Correct!";
      changeColours(clickedColour);
      h1.style.backgroundColor = clickedColour;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again...";
    }
  });
}

function changeColours(colour) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change all colours to match correct colour
    squares[i].style.backgroundColor = colour;
  }
}

function pickColour() {
  // pick random number to draw value from colours array
  var random = Math.floor(Math.random() * colours.length);
  // return random value in array
  return colours[random];
}

function generateRandomColours(num) {
  // make an array
  var arr = []
  // repeat num times
  for (var i = 0; i < num; i++) {
    // get random colour and push to array
    arr.push(randomColour());
  }
  // return that array
  return arr;
}

function randomColour() {
  // pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  // pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);
  //articulate random colour in string format
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
