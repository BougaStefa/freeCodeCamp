<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Advanced Dice Game</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <header>
    <h1>Advanced Dice Game</h1>
    <button class="btn" id="rules-btn" type="button">Show rules</button>
    <div class="rules-container">
      <h2>Rules</h2>
      <ul>
        <li>There are total of six rounds</li>
        <li>You can only roll the dice three times per round</li>
        <li>To start the game, roll the dice</li>
        <li>
          Then, choose from one of the selected scores or roll the dice again
        </li>
        <li>
          If you choose a selected score, then you will move to the next round
        </li>
        <li>
          If you decline to choose a selected score, then you can roll the
          dice again two more times
        </li>
      </ul>
      <h2 class="points">Points</h2>
      <ul>
        <li>Three of a kind: Sum of all five dice</li>
        <li>Four of a kind: Sum of all five dice</li>
        <li>Full house: Three of a kind and a pair - 25 points</li>
        <li>
          Small straight: Four of the dice have consecutive values - 30 points
        </li>
        <li>
          Large straight: All five dice have consecutive values - 40 points
        </li>
      </ul>
    </div>
  </header>

  <main>
    <form id="game">
      <div id="dice">
        <div class="die"></div>
        <div class="die"></div>
        <div class="die"></div>
        <div class="die"></div>
        <div class="die"></div>
      </div>

      <p class="rounds-text">
        <strong>Rolls:</strong> <span id="current-round-rolls">0</span> |
        <strong>Round:</strong> <span id="current-round">1</span>
      </p>

      <div id="score-options">
        <div>
          <input type="radio" name="score-options" id="three-of-a-kind" value="three-of-a-kind" disabled />
          <label for="three-of-a-kind">Three of a kind<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="four-of-a-kind" value="four-of-a-kind" disabled />
          <label for="four-of-a-kind">Four of a kind<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="full-house" value="full-house" disabled />
          <label for="full-house">Full house<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="small-straight" value="small-straight" disabled />
          <label for="small-straight">Small straight<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="large-straight" value="large-straight" disabled />
          <label for="large-straight">Large straight<span></span></label>
        </div>

        <div>
          <input type="radio" name="score-options" id="none" value="none" disabled />
          <label for="none">None of the above<span></span></label>
        </div>
      </div>

      <button class="btn" id="keep-score-btn" type="button">
        Keep the above selected score
      </button>
      <button class="btn" id="roll-dice-btn" type="button">
        Roll the dice
      </button>
    </form>

    <div id="scores">
      <h3>Score history (Total score: <span id="total-score">0</span>)</h3>
      <ol id="score-history"></ol>
    </div>
  </main>
  <script src="./script.js"></script>
</body>

</html>