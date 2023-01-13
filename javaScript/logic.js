// Selects timer div element by id
let timerEl = document.querySelector("#time");
// Set time for quiz to 100s
let secondsLeft = 10;
// Selects start button element by id
let startBtn = document.querySelector("#start")

// Function to set timer countdown
function setTime() {
  // sets timer interval to 1s/1000ms
  let timerInterval = setInterval(function() {
    // removes 1 from displayed time left for quiz
    secondsLeft--;
    // sets content of timer to time left
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // stops execution of action when time runs out
      clearInterval(timerInterval);
      console.log("Thanks for playing!")
    }

  }, 1000);
}

// function to handle start quiz click
function startQuiz() {
    setTime();
}

startBtn.addEventListener("click", startQuiz);