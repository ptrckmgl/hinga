const slider = document.getElementById("slider");
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

let intervalId;
let isRunning = false;
duration = slider.value * 60;

timer.innerHTML = `${slider.value}:00`;

slider.oninput = function () {
  timer.innerHTML = `${this.value}:00`;
};

start.addEventListener("click", function () {
  if (!isRunning) {
    if (duration <= 0) {
      duration = slider.value * 60;
    }
    intervalId = setInterval(updateCountdown, 1000);
    isRunning = true;
  }
});

pause.addEventListener("click", function () {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
});

reset.addEventListener("click", function () {
  clearInterval(intervalId);
  isRunning = false;
  duration = 0;
  timer.innerHTML = `${slider.value}:00`;
});

function updateCountdown() {
  const minutes = Math.floor(duration / 60);
  let seconds = duration % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer.innerHTML = `${minutes}:${seconds}`;
  duration--;
  duration = duration < 0 ? 0 && clearInterval(intervalId) : duration;
}
