/*
 * Chronometer.js, 23/02/2022
 * no copyright, no rights
 */

/**
 * Simple chronometer
 * @author Lucas Vbr
 */
class Chronometer {

  /**
   * Create a new Chronometer
   * @param element HTML element that will content the display of the chronometer
   * @param time Initialize the timer (0 by default)
   * @param separator Set the separator between digits (":" by default)
   */
  constructor(element, time = 0, separator = ":") {
    this.element = element;
    this.time = time;
    this.isCounting = false;
    this.separator = separator;
    this.update();
  }

  /**
   * Diplay in the HTML element the current value of the timer as HH:mm:ss
   */
  update() {
    let seconds = this.convertTwoDigits(this.time % 60);
    let minuts = this.convertTwoDigits(Math.floor(this.time / 60) % 60);
    let hours = this.convertTwoDigits(Math.floor(this.time / 3600) % 24);

    this.element.innerText = hours + this.separator + minuts + this.separator + seconds
  }

  /**
   * Convert a number with 2 digits string
   * @param number Integer number
   * @returns {string} Formated String with 2 digits number
   */
  convertTwoDigits(number) {
    return number.toLocaleString("fr", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }

  /**
   * Start the chronometer
   */
  start() {
    if (!this.isCounting) {
      console.debug("Start");
      this.isCounting = true;
      this.interval = setInterval(() => {
        this.time++;
        this.update();
      }, 1000)
    }
  }

  /**
   * Stop the chronometer
   */
  stop() {
    if (this.isCounting) {
      clearInterval(this.interval);
      this.isCounting = false;
    }
  }

  /**
   * Stop the chonometer and set the time to 0
   */
  clear() {
    this.stop();
    this.time = 0;
    this.update(); /* Update the view */
  }
}