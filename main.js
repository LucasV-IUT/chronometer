/* Get all elements */
const element = document.getElementById('time-value');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const clearButton = document.getElementById('clear-button');

/* Create a new Chronometer */
const chrono = new Chronometer(element);

/* Define actions of buttons */
startButton.addEventListener("click", () => {
  chrono.start()
});

stopButton.addEventListener("click", () => {
  chrono.stop()
});

clearButton.addEventListener("click", () => {
  chrono.clear()
});