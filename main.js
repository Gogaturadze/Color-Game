//
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//
let levelId = document.getElementById("game-level");
//
let score = 0;
let scoreId = document.getElementById("score");

scoreId.innerText = "Score: " + score;

function refreshScore() {
  scoreId.innerText = "Score: " + score;
}
//
let colors = [];
let arrayColorLenght = 5;
for (let i = 0; i < arrayColorLenght; i++) {
  colors.push(getRandomColor());
}
function increaseLenght(num) {
  for (let i = 0; i < num; i++) {
    colors[i] = getRandomColor();
  }
  mainColor.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
  addGuessColors(colors);
}

//
let mainColor = document.getElementById("main-color");
mainColor.style.backgroundColor = colors[Math.floor(Math.random() * 5) + 1];
//

function addGuessColors(colors) {
  let guessColorBox = document.getElementById("guess-color");
  guessColorBox.innerHTML = "";
  let arrayColor = colors;
  for (let i = 0; i < arrayColor.length; i++) {
    let addColorBtn = document.createElement("button");
    addColorBtn.style.border = "none";
    addColorBtn.style.height = "50px";
    addColorBtn.style.width = "50px";
    addColorBtn.style.cursor = "pointer";
    guessColorBox.appendChild(addColorBtn);
    addColorBtn.style.backgroundColor = arrayColor[i];
    addColorBtn.addEventListener("click", function () {
      if (mainColor.style.backgroundColor != this.style.backgroundColor) {
        alert("ვერ გამოიცანით");
      } else {
        alert("გილოცავთ ! თქვენ გამოიცანით");
        let allButtons = guessColorBox.querySelectorAll("button");
        allButtons.forEach(function (button) {
          button.style.backgroundColor = mainColor.style.backgroundColor;
        });
        score++;
        refreshScore();
        if (score == 3) {
          increaseLenght(8);
          levelId.innerHTML = "Medium";
          levelId.style.color = "#3B44F6";
        } else if (score == 6) {
          increaseLenght(10);
          levelId.innerHTML = "Hard";
          levelId.style.color = "#EB5353";
        } else if (score == 10) {
          levelId.innerHTML = "You Win";
          levelId.style.color = "#3EC70B";
          scoreId.style.display = "none";
        }
      }
    });
  }
}
//
function nextColor() {
  if (score == 10) {
    location.reload();
  }
  for (let i = 0; i < 5; i++) {
    colors[i] = getRandomColor();
  }
  mainColor.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
  addGuessColors(colors);
}

window.onload = addGuessColors(colors);
