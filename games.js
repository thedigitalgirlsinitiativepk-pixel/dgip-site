document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("gameRoot");
  if (!root || !window.DGIP_GAMES) return;

  var params = new URLSearchParams(window.location.search);
  var id = params.get("c") || root.getAttribute("data-game") || "";
  var game = window.DGIP_GAMES[id];
  if (!game) {
    root.innerHTML =
      '<p class="lead">Game not found. <a href="games.html" style="text-decoration:underline;font-weight:700">Back to all games</a>.</p>';
    return;
  }

  var titleEl = document.getElementById("gameTitle");
  var blurbEl = document.getElementById("gameBlurb");
  var crumbsEl = document.getElementById("gameCrumbs");
  if (titleEl) titleEl.textContent = game.title;
  if (blurbEl) blurbEl.textContent = game.blurb;
  if (crumbsEl) {
    crumbsEl.innerHTML =
      '<a href="index.html">Home</a> / <a href="games.html">Games</a> / ' +
      game.course;
  }
  document.title = game.title + " | Digital Girls Initiative Pakistan";

  var index = 0;
  var score = 0;
  var locked = false;

  function render() {
    if (index >= game.questions.length) {
      var pct = Math.round((score / game.questions.length) * 100);
      var msg =
        pct === 100
          ? "Perfect score — you are on fire!"
          : pct >= 70
            ? "Strong work — keep building on this track."
            : "Good start — revisit the roadmap and try again.";
      root.innerHTML =
        '<div class="game-result">' +
        '<p class="game-result-k">Round complete</p>' +
        "<h2>You scored " +
        score +
        " / " +
        game.questions.length +
        "</h2>" +
        "<p>" +
        msg +
        "</p>" +
        '<div class="hero-actions" style="margin-top:24px">' +
        '<button type="button" class="btn btn--primary" id="replayBtn">Play again →</button>' +
        '<a class="btn btn--pink" href="' +
        game.courseUrl +
        '">Open course roadmap</a>' +
        '<a class="btn btn--ghost" href="games.html">All games</a>' +
        "</div></div>";
      document.getElementById("replayBtn").addEventListener("click", function () {
        index = 0;
        score = 0;
        locked = false;
        render();
      });
      return;
    }

    var item = game.questions[index];
    var opts = item.options
      .map(function (opt, i) {
        return (
          '<button type="button" class="game-opt" data-i="' +
          i +
          '"><span class="game-opt-key">' +
          String.fromCharCode(65 + i) +
          "</span><span>" +
          opt +
          "</span></button>"
        );
      })
      .join("");

    root.innerHTML =
      '<div class="game-progress"><span>Question ' +
      (index + 1) +
      " of " +
      game.questions.length +
      '</span><span>Score ' +
      score +
      "</span></div>" +
      '<div class="game-bar"><i style="width:' +
      ((index / game.questions.length) * 100) +
      '%"></i></div>' +
      '<h2 class="game-q">' +
      item.q +
      "</h2>" +
      '<div class="game-opts">' +
      opts +
      "</div>" +
      '<p class="game-feedback" id="gameFeedback" hidden></p>' +
      '<button type="button" class="btn btn--primary" id="nextBtn" hidden>Next →</button>';

    locked = false;
    root.querySelectorAll(".game-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (locked) return;
        locked = true;
        var chosen = Number(btn.getAttribute("data-i"));
        var correct = chosen === item.answer;
        if (correct) score += 1;
        root.querySelectorAll(".game-opt").forEach(function (b, i) {
          b.disabled = true;
          if (i === item.answer) b.classList.add("is-correct");
          if (i === chosen && !correct) b.classList.add("is-wrong");
        });
        var fb = document.getElementById("gameFeedback");
        fb.hidden = false;
        fb.textContent = correct
          ? "Correct — nice!"
          : "Not quite — the highlighted answer is right.";
        fb.className = "game-feedback " + (correct ? "ok" : "bad");
        var next = document.getElementById("nextBtn");
        next.hidden = false;
        next.addEventListener("click", function () {
          index += 1;
          render();
        });
      });
    });
  }

  render();
});
