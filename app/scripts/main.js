import heart from './heart';
import timer from './timer';
import map from './map';
//import bubbles from './bubbles';

(function() {
  document.addEventListener('DOMContentLoaded', function(event) {
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
