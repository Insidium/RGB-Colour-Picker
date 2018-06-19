var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // using ternary operator (takes place of if/else, same logic flow) below
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
      // grab colour of clicked square
      var clickedColour = this.style.backgroundColor;
      // compare colour to pickedColour
      if (clickedColour === pickedColour) {
        messageDisplay.textContent = "That's Correct!";
        changeColours(clickedColour);
        h1.style.backgroundColor = clickedColour;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again...";
      }
    });
  }
}

function reset(){
  colours = generateRandomColours(numSquares);
  // pick a new random colour from array
  pickedColour = pickColour();
  // change colourDisplay to match pickedColour
  colourDisplay.textContent = pickedColour;
  // remove correct/wrong text from span
  messageDisplay.textContent = "";
  //change play again back to new colours text
  resetButton.textContent = "New Colours";
  // change colours of squares
  for (var i = 0; i < squares.length; i++) {
    if (colours[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

colourDisplay.textContent = pickedColour;

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
