document.addEventListener("DOMContentLoaded", function () {
    //task1
    var boundary1 = document.getElementById("boundary1");
    boundary1.addEventListener("mouseover", function () {
      this.classList.add("youlose");
    });
  
    //task2
    var boundaries = document.querySelectorAll(".boundary");
    boundaries.forEach(function (boundary) {
      boundary.addEventListener("mouseover", function () {
        boundaries.forEach(function (b) {
          b.classList.add("youlose");
        });
        updateStatus("You lose!");
      });
    });
  
    //task3
    var end = document.getElementById("end");
    end.addEventListener("mouseover", function () {
      if (!document.querySelector(".youlose")) {
        updateStatus("You win!");
      }
    });
  
    //task4
    var start = document.getElementById("start");
    start.addEventListener("click", function () {
      boundaries.forEach(function (boundary) {
        boundary.classList.remove("youlose");
      });
      updateStatus("Move your mouse over the \"S\" to begin.");
      gameStarted = false;
    });
    //task6
    function updateStatus(message) {
      var status = document.getElementById("status");
      status.textContent = message;
    }
  
  });
  