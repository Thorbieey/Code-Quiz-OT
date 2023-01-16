// select high scores ordered list element
let highscoresEl = document.querySelector("#highscores");
// select clear high scores button
let clearHighscoreBtn = document.querySelector("#clear");

// get stored highscore from localStorage
let storedHighscore = JSON.parse(localStorage.getItem("highscore")); 

renderHighscores();

// Function to render highscores
function renderHighscores() {
    for (let i = 0; i < storedHighscore[0].length; i++) {
        // create high score list element, and set their content 
        let highscoreLi = document.createElement('li');
        highscoreLi.textContent = storedHighscore[0][i] + " - " + storedHighscore[1][i];
        highscoresEl.appendChild(highscoreLi);
    }
}