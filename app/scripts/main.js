import heart from './heart';
import timer from './timer';
import map from './mapool';
import guest from './guest';
import aos from './aos';
import Flickity from './flick/index';
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

    var elem = document.querySelector('.carousel');
    var flkty = new Flickity(elem, {
      cellAlign: 'left',
      contain: true,
      adaptiveHeight: false,
      cellAlign: 'right',
      contain: true,
      groupCells: '80%',
      wrapAround: true,
      freeScroll: true,
      pageDots: false
    });
  });
})();
