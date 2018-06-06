import heart from './heart';
import timer from './timer';
import map from './mapool';
import guest from './guest';
import aos from './aos';
import gifts from './gifts';
import friends from './friends';
import ball from './ball';
import audio from './audio';
//import bubbles from './bubbles';

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

    // let bg = getParameterByName('bg');
    // let family = document.querySelector('.thankyou');
    // family.style.backgroundImage = `url('images/${bg}.jpg')`;
    // family.classList.add(bg);
  });
})();

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
