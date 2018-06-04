import heart from './heart';
import timer from './timer';
import map from './mapool';
import guest from './guest';
import aos from './aos';
import gifts from './gifts';
import friends from './friends';
import ball from './ball';
//import bubbles from './bubbles';

(function() {
  document.addEventListener('DOMContentLoaded', function(event) {
    aos.init();
    guest().Guest.setGuest();
    window.setTimeout(function() {
      let left = document.querySelector('.body');
      left.classList.remove('start');
      map().Map.init();
    }, 0);
    heart().HeartsBackground.initialize();
    timer().Timer.init();
    friends().Friends.init();
    gifts().Gifts.init();
    ball().Ball.init();
  });
})();
