// Selects timer div element by id
let timerEl = document.querySelector("#time");
// Selects start button at quiz start
let startBtn = document.querySelector("#start")
// Selects submit button to save initials at quiz end
let submitBtn = document.querySelector("#submit")
// Selects start screen content
let startScreen = document.querySelector("#start-screen")
// Selects the div element that houses the questions and choices
let questionsDiv = document.querySelector("#questions")
// Selects the element that displays the question
let questionTitleEl = document.querySelector("#question-title")
// Selects the div element that displays the choices 
let choicesEl = document.querySelector("#choices")
// Selects the div element that displays the end quiz screen
let endScreenDiv = document.querySelector("#end-screen")
// Selects the p-span element that displays the final score
let finalScoreSpan = document.querySelector("#final-score")
// stores players score
let score = 0;
// selects the input for entered players initials to save hight score
let initialsInput = document.querySelector("#initials")


let questions = [
    {question:'Is she a cow?', answer:'cow', options:['cow', 'sheep', 'lion', 'tiger']},
    {question:'Is she a sheep?', answer:'sheep', options:['cow', 'sheep', 'lion', 'tiger']},
    {question:'Is she a lion?', answer:'lion', options:['cow', 'sheep', 'lion', 'tiger']},
    {question:'Is she a monkey?', answer:'monkey', options:['cow', 'sheep', 'lion', 'tiger']},
    {question:'Is she a tiger?', answer:'tiger', options:['cow', 'sheep', 'lion', 'tiger']}
]

let questionIndex = 0;

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
    renderQuestions();
}

// Function to display questions
function renderQuestions() { 
    questionsDiv.setAttribute("class", "start");
    choicesEl.innerHTML = "";
    if(questionIndex == questions.length){
        console.log("No more Questions");
        endQuiz();
    }
    else{
        const question = questions[questionIndex].question;
        const answer = questions[questionIndex].options;
        questionTitleEl.textContent = question; 
        for (let i = 0; i < answer.length; i++) {
            // creates the button element that houses the choices 
            let optionBtn = document.createElement("button")
            // Display numbered choices 
            optionBtn.textContent = answer[i];
            choicesEl.appendChild(optionBtn);
        }
    }
    
}

// Function to display next question
function nextQuestion(event) {
    if(event.target.matches("button")){
        if (event.target.textContent === questions[questionIndex].answer){
            score++;
            console.log("Correct answer");     
        }
        else{
            console.log("Incorrect answer");
        }
        console.log(score);
        questionIndex++;
        renderQuestions();
    }
}

// Function to end quiz
function endQuiz() {
    questionsDiv.setAttribute("class", "hide");
    endScreenDiv.setAttribute("class", "start");
    finalScoreSpan.textContent = score;
}

// Function to submit quiz
function submitInitials() {
    let initials = initialsInput.value;
    console.log(initials)

    // Return from function early if submitted initials is blank
    if (initials === "") {
        return;
    }
    
}

// Event listener for click on start quiz button
startBtn.addEventListener("click", startQuiz);

// Event listener for click on an answer button to move to next question
questionsDiv.addEventListener("click", nextQuestion);

// Event listener for click on submit button to save high score
submitBtn.addEventListener("click", );