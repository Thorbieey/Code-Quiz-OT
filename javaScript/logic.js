// Selects timer div element by id
let timerEl = document.querySelector("#time");
// set time for quiz to 100s
let secondsLeft = 100;

setTime();

// function to set timer countdown
function setTime() {
  // Sets timer interval to 1s/1000ms
  let timerInterval = setInterval(function() {
    // removes 1 from displayed time left for quiz
    secondsLeft--;
    // set content of timer to time left
    timerEl.textContent = secondsLeft;
    
    if(secondsLeft === 0) {
      // Stops execution of action when time runs out
      clearInterval(timerInterval);
      console.log("Thanks for playing!")
    }

  }, 1000);
}