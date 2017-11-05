let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

//Event listeners
buttons.forEach(btn => btn.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
} )

//functions
function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displaySecondsLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(()=> {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check for stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    };
    //display time
    displaySecondsLeft(secondsLeft);
  }, 1000);
}

function displaySecondsLeft(sec) {
    const minutes = Math.floor(sec / 60);
    const reminderSeconds = sec % 60;
    const display = `${minutes} : ${reminderSeconds < 10 ? '0' : ''} ${reminderSeconds}`;

    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const endHour = end.getHours();
  const endMinute = end.getMinutes();

  endTime.textContent = `Wracam za ${endHour} : ${endMinute}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

