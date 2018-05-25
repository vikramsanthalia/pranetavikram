import heart from './heart';
import timer from './timer';
import map from './mapol';
import guest from './guest';
import aos from './aos';
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
    //bubbles();
  });
})();
