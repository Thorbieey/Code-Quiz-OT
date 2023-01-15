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
// Selects the div element that displays the end screen heading text
let endScreenH2 = document.querySelector("#status")
// Selects the p-span element that displays the final score
let finalScoreSpan = document.querySelector("#final-score")
// stores players score
let score = 0;
// selects the input for entered players initials to save hight score
let initialsInput = document.querySelector("#initials")


let questions = [
    {question:'Inside which HTML element do we put the JavaScript?', answer:'script', options:['JS', 'JavaScript', 'script', 'scripting']},
    {question:'Which operator returns true if the two compared values are not equal?', answer:'!==', options:['<>', '==!', '~', '!==']},
    {question:'How is a forEach statement different from a for statement?', answer:'A for statement is generic, but a forEach statement can be used only with an array.', options:['Only a for statement uses a callback function.', 'A for statement is generic, but a forEach statement can be used only with an array.', 'Only a forEach statement lets you specify your own iterator.', 'A forEach statement is generic, but a for statement can be used only with an array.']},
    {question:'Which statement is the correct way to create a variable called rate and assign it the value 100?', answer:'let rate = 100;', options:['let rate = 100;', 'let 100 = rate;', '100 = let rate;', 'rate = 100;']},
    {question:'Which property references the DOM object that dispatched an event?', answer:'target', options:['self', 'object', 'target', 'source']}
]

let questionIndex = 0;

// Set time for quiz to 100s
let deductTime;
// Function to set timer countdown
function setTime() {
    // Set time for quiz to 100s
    let secondsLeft = 20;  
    // sets timer interval to 1s/1000ms
    let timerInterval = setInterval(function() { 
    // removes 1 from displayed time left for quiz
    secondsLeft--;
    // sets content of timer to time left
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
        // stops timer when time runs out
        clearInterval(timerInterval);
        // set end quiz h2 text
        endScreenH2.textContent = "Time's Up!"
        // end quiz on time running out
        endQuiz();
        console.log("Thanks for playing!");
    }
    else if (endScreenDiv.getAttribute("class") === "start"){
        // stops timer on end quiz
        clearInterval(timerInterval);
        console.log("Thanks for playing!");
    }
    else if (deductTime === true){
        // remove 10s from time left
        secondsLeft -= 10;
        console.log("Minus 10s");
    }
    // reset deduct time to false
    deductTime = false;
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
        // set end quiz h2 text
        endScreenH2.textContent = "All done!"
        // end quiz on all questions answered
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
            deductTime = true;
            console.log("Incorrect answer");
        }
        console.log(score);
        questionIndex++;
        renderQuestions();
    }
}

// Function to end quiz
function endQuiz() {
    // hide questions display
    questionsDiv.setAttribute("class", "hide");
    // display end screen
    endScreenDiv.setAttribute("class", "start");
    // set final score in page-paragraph content
    finalScoreSpan.textContent = score + "/" + questions.length;
}

// Function to submit quiz
function submitInitials() {
    let initials = initialsInput.value;
    console.log(initials)

    // Return from function early if submitted initials is blank
    if (initials === "") {
        return;
    }
    // restart question count
    questionIndex = 0;
    // clear player score
    score = 0;
    // clear initials input
    initials = "";
    // reset timer 
    initials = "";
    // remove end screen
    endScreenDiv.setAttribute("class", "hide");
    // display start screeen
    startScreen.setAttribute("class", "start");
}

// Event listener for click on start quiz button
startBtn.addEventListener("click", startQuiz);

// Event listener for click on an answer button to move to next question
questionsDiv.addEventListener("click", nextQuestion);

// Event listener for click on submit button to save high score
submitBtn.addEventListener("click", submitInitials);