function printHighscores() {
  // either get scores from localstorage or set to empty array
  highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  // (optional) sort highscores by score property in descending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {
    // create li tag for each high score
    var liTag = document.createElement("li");
    liTag.textContent = score;

    // display on page
    var olEl = document.getElementById("highscores");
    olEl.append(liTag);
  });
}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;
// run printhighscore when page loads
printHighscores();