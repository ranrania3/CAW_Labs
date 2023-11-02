document.addEventListener("DOMContentLoaded", function () {
  var winCount = 0;
  var loseCount = 0;
  var gameStarted = false;
  var timer; 
  var timerStarted = false;

  // Task2
  var boundaries = document.querySelectorAll(".boundary");
  boundaries.forEach(function (boundary) {
    boundary.addEventListener("mouseover", function () {
      if (gameStarted) {
       
        boundaries.forEach(function (b) {
          b.classList.add("youlose");
        });
        loseCount++;
        updateScore();
        updateStatus("You lose!");
        gameStarted = false;
        stopTimer(); 
      }
    });
  });

  
  function updateScore() {
    var score = document.getElementById("score");
    score.textContent = "Wins: " + winCount + " | Losses: " + loseCount;
  }

  
  function updateStatus(message) {
    var status = document.getElementById("status");
    status.textContent = message;
  }

  // Task3: 
  var end = document.getElementById("end");
  end.addEventListener("mouseover", function () {
    if (gameStarted) {
      winCount++;
      updateScore();
      updateStatus("You win!");

      
      boundaries.forEach(function (boundary) {
        boundary.classList.add("win");
      });

      stopTimer(); 

      
      var elapsedTime = parseFloat(document.getElementById("timer").textContent.split(":")[1]);
      var resultMessage = "You won the game in " + elapsedTime.toFixed(2) + " seconds";
      updateStatus(resultMessage);

      gameStarted = false;
    }
  });

  // Task4
  var start = document.getElementById("start");
  start.addEventListener("click", function () {
    
    boundaries.forEach(function (boundary) {
      boundary.classList.remove("youlose");
      boundary.classList.remove("win");
    });
    updateStatus("Click on the \"S\" to begin.");
    gameStarted = true;

    
    resetTimer();

    startTimer(); 
  });

  
  function startTimer() {
    if (!timerStarted) {
      var startTime = Date.now();
      timer = setInterval(function () {
        var currentTime = Date.now();
        var elapsedTime = (currentTime - startTime) / 1000; 
        document.getElementById("timer").textContent = "Time: " + elapsedTime.toFixed(2) + "s";
      }, 100);
      timerStarted = true;
    }
  }

      function stopTimer() {
    clearInterval(timer);
    timerStarted = false;
  }

    function resetTimer() {
    document.getElementById("timer").textContent = "Time: 0.00s";
  }
});
