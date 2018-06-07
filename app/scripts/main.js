import heart from './heart';
import timer from './timer';
import map from './mapool';
import guest from './guest';
import aos from './aos';
import gifts from './gifts';
import friends from './friends';
import ball from './ball';
import audio from './audio';
import 'web-animations-js/web-animations.min';

(function() {
  document.addEventListener('DOMContentLoaded', function(event) {
    aos.init();
    guest().Guest.setGuest();
    heart().HeartsBackground.initialize();
    timer().Timer.init();
    friends().Friends.init();
    gifts().Gifts.init();
    ball().Ball.init();
    window.setTimeout(function() {
      let left = document.querySelector('.body');
      left.classList.remove('start');
      map().Map.init();
      audio().Audio.init();
    }, 1500);
  });
})();
