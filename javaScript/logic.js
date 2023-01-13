// Selects timer div element by id
let timerEl = document.querySelector("#time");

// Selects start button element by id
let startBtn = document.querySelector("#start")
// Selects start screen content
let startScreen = document.querySelector("#start-screen")
// Selects the div element that houses the questions
let questionsEl = document.querySelector("#questions")
// Selects the element that displays the question
let questionTitleEl = document.querySelector("#question-title")
// Selects the div element that houses the answer choices questions
let choicesEl = document.querySelector("#choices")

let questions = [
    {question1:'Is she a cow?', value:'cow'},
    {question2:'Is she a sheep?', value:'sheep'},
    {question3:'Is she a lion?', value:'lion'},
    {question4:'Is she a monkey?', value:'monkey'},
    {question5:'Is she a tiger?', value:'tiger'}
]

let options = [
    {1:'cow', 2:'sheep', 3:'lion', 4:'tiger'},
    {1:'cow', 2:'sheep', 3:'lion', 4:'tiger'},
    {1:'cow', 2:'sheep', 3:'lion', 4:'tiger'},
    {1:'cow', 2:'monkey', 3:'lion', 4:'tiger'},
    {1:'cow', 2:'sheep', 3:'lion', 4:'tiger'}
]

// Function to set timer countdown
function setTime() {
    // Set time for quiz to 100s
    let secondsLeft = 5;
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

// Function to handle start quiz click
function startQuiz() {
    // start timer countdown
    setTime();
    // remove start screen content
    startScreen.setAttribute("class", "hide");
}

// Function to display questions
function renderQuestions() {
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i][0];
        questionTitleEl.textContent = "question";
        
    }
    
}

startBtn.addEventListener("click", startQuiz);