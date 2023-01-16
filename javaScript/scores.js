// select high scores ordered list element
let highscoresEl = document.querySelector("#highscores");

// get stored highscore from localStorage
let storedHighscore = JSON.parse(localStorage.getItem("highscore")); 

renderHighscores();
function renderHighscores() {
    for (let i = 0; i < storedHighscore[0].length; i++) {
        // create high score list element, and set their content 
        let highscoreLi = document.createElement('li');
        highscoreLi.textContent = storedHighscore[0][i] + " - " + storedHighscore[1][i];
        highscoresEl.appendChild(highscoreLi);
    }
}