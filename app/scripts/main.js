import heart from './heart';
import timer from './timer';
import map from './map';
import guest from './guest';
//import bubbles from './bubbles';

(function() {
  document.addEventListener('DOMContentLoaded', function(event) {
    guest().Guest.setGuest();
    window.setTimeout(function() {
      let left = document.querySelector('.body');
      left.classList.remove('start');
      map().Map.init();
    }, 3000);
    heart().HeartsBackground.initialize();
    timer().Timer.init();

    //bubbles();
  });
})();
