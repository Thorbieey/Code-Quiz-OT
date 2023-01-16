// select highscores ordered list element
let highscoresOl = document.querySelector("#highscores");
// select clear highscores button
let clearHighscoreBtn = document.querySelector("#clear");

// get stored highscore from localStorage
let storedHighscore = JSON.parse(localStorage.getItem("highscore")); 

renderHighscores();

// Function to render highscores
function renderHighscores() {
    highscoresOl.innerHTML = "";
    if(storedHighscore !== null){
        for (let i = 0; i < storedHighscore[0].length; i++) {
            // create high score list element, and set their content 
            let highscoreLi = document.createElement('li');
            highscoreLi.textContent = storedHighscore[0][i] + " - " + storedHighscore[1][i];
            highscoresOl.appendChild(highscoreLi);
        }
    }
    console.log("Highscores rendered");
}

// Function to clear highscores
function clearHighscores() {
    localStorage.removeItem('highscore');
    storedHighscore = JSON.parse(localStorage.getItem("highscore")); 
    console.log("Highscores cleared")
    renderHighscores();
}

clearHighscoreBtn.addEventListener("click", clearHighscores)