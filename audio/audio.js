'use strict';
const path = require('path');
const av = require('tessel-av');
const mp3 = path.join(__dirname, '20-second-nonsense.mp3');
console.log('one');
const sound = new av.Player(mp3);
console.log('two');
sound.play();

sound.on('timeupdate', function(seconds) {
  seconds = Math.round(seconds);

  if (seconds === 2) {
    this.pause();
  }

  if (seconds > 12) {
    this.stop().play();
  }
});

sound.on('pause', function() {
  setTimeout(() => this.play(10), 1000);
});
