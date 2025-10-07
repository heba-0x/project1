let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displaynumber = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};
const stylewi = function (width) {
  document.querySelector(".number").style.width = width;
};

const scores = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayackground = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there in no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displaymessage("No Number !!");
  }

  //when player win
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "the corect Answer";
    displaymessage("the correct Answer");
    // document.querySelector(".number").textContent = secretNumber;
    displaynumber(secretNumber);
    // document.querySelector("body").style.backgroundColor = "#60b347";
    displayackground("#60b347");
    // document.querySelector(".number").style.width = "30rem";
    stylewi("30rem");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage(guess > secretNumber ? "Too High" : "too low");
      score--;
      // document.querySelector(".score").textContent = score;-
      scores(score);
    } else {
      // document.querySelector(".message").textContent = "🥲you lost the game!";
      displaymessage("🥲you lost the game!");
      // document.querySelector(".score").textContent = 0;
      scores("0");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".guess").value = "";
  displaymessage("Start guessing...");
  displaynumber("?");
  scores(score);
  displayackground("#222");
  stylewi("15rem");
});
