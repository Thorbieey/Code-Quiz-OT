// Select highscores ordered list element
let highscoresOl = document.querySelector("#highscores");
// Select clear highscores button
let clearHighscoreBtn = document.querySelector("#clear");

// Get stored highscore from localStorage
let storedHighscore = JSON.parse(localStorage.getItem("highscore")); 

renderHighscores();

// Function to render highscores
function renderHighscores() {
    // reset highscore list
    highscoresOl.innerHTML = "";
    if(storedHighscore !== null){
        // if highscore has been submitted
        for (let i = 0; i < storedHighscore[0].length; i++) {
            // create high score list element, and set their content 
            let highscoreLi = document.createElement('li');
            highscoreLi.textContent = storedHighscore[0][i] + " - " + storedHighscore[1][i];
            highscoresOl.appendChild(highscoreLi);
        }
    }
}

// Function to clear highscores
function clearHighscores() {
    // remove highscore from local storage
    localStorage.removeItem('highscore');
    storedHighscore = JSON.parse(localStorage.getItem("highscore"));
    // render highscores again after clearing scores 
    renderHighscores();
}

// Event listener for click to clear highscores
clearHighscoreBtn.addEventListener("click", clearHighscores)