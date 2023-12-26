let minutes = 25;
let seconds = 0;
let duration = 25;

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const restartBtn = document.getElementById('restart');

const timerContainer = document.getElementById("time-container");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");

let stopped = false;

startBtn.addEventListener("click", () => {
  startTimer();
  console.log("Started");
});

stopBtn.addEventListener("click", () => {
  stopTimer();
  console.log("Stopped");
});

restartBtn.addEventListener('click', ()=>{
    restartTimer();
})

function startTimer() {
  const timer = setInterval(() => {
    if (stopped) {
      return;
    }
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
    } else {
      if (seconds === 0) {
        minutes--;
        seconds = 60;
      } else {
        seconds--;
        console.log(seconds);
        secondsContainer.innerText = seconds;
        minutesContainer.innerText = minutes;
      }
    }
  }, 1000);
}

function stopTimer() {
  stopped = true;
}

function restartTimer() {
    stopped  = false;
seconds = 0 ;
minutes = 25 ; 
}
