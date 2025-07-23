const slider = document.getElementById("slider");
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const preset1 = document.getElementById("preset1");
const preset2 = document.getElementById("preset2");
const preset3 = document.getElementById("preset3");

let intervalId;
let isRunning = false;
let hasStarted = false;
duration = slider.value * 60;
timer.innerHTML = `${slider.value}:00`;

slider.oninput = function () {
  timer.innerHTML = `${this.value}:00`;
};

function updateTimerDisplay() {
  const minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer.innerHTML = `${minutes}:${seconds}`;
}

function updateCountdown() {
  updateTimerDisplay();
  duration--;
  duration = duration < 0 ? 0 && clearInterval(intervalId) : duration;
}

function updateSliderDisplay() {
  slider.value = duration / 60;
}

function startTimer() {
  if (!isRunning) {
    if (duration <= 0) {
      duration = slider.value * 60;
    }
    if (!hasStarted) {
      updateCountdown();
      hasStarted = true;
    }
    intervalId = setInterval(updateCountdown, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(intervalId);
  isRunning = false;
}

function resetTimer() {
  clearInterval(intervalId);
  isRunning = false;
  hasStarted = false;
  duration = 0;
  updateSliderDisplay();
  timer.innerHTML = `${slider.value}:00`;
}

function setPreset(minutes) {
  clearInterval(intervalId);
  isRunning = false;
  hasStarted = false;
  duration = minutes * 60;
  updateTimerDisplay();
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
preset1.addEventListener("click", () => {
  setPreset(5);
  updateSliderDisplay();
});
preset2.addEventListener("click", () => {
  setPreset(10);
  updateSliderDisplay();
});

preset3.addEventListener("click", () => {
  setPreset(15);
  updateSliderDisplay();
});
