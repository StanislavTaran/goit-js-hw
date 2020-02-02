'use strict';
const refs = {
  timerFace: document.getElementById('#timer-1'),
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  timerId = setInterval(() => {
    const currentTime = Date.now();
    this.deltaTime = this.targetDate - currentTime;
    this.updateClockface(this.deltaTime);
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Feb 10, 2020'),
});
