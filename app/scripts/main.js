import heart from './heart'; 
import timer from './timer';
//import bubbles from './bubbles'; 

(function() {
  document.addEventListener('DOMContentLoaded', function(event) {
    heart().HeartsBackground.initialize();
    timer().Timer.init();
    //bubbles();
  });
})();