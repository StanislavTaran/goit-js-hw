'use strict';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitcher = {
  colors: ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'],

  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      refs.body.style.background = this.colors[
        randomIntegerFromInterval(0, this.colors.length - 1)
      ];
    }, 1000);
    console.log('start');
  },
  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
    console.log('stop');
  },
};

refs.startBtn.addEventListener('click', colorSwitcher.start.bind(colorSwitcher));
refs.stopBtn.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));
