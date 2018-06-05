import Flickity from './flick/index';
import giftList from './giftsList';

export default function() {
  return {
    Gifts: {
      init: function() {
        getAndSet();
      }
    }
  };
}

function getAndSet() {
  let carousel = document.querySelector('.carousel');
  let sortedList = giftList.gifts.sort(compare);
  sortedList.forEach(gift => {
    let cell = document.createElement('div');
    cell.classList.add('carousel-cell');
    let imgLink = document.createElement('a');
    imgLink.href = gift['pdUrl'];
    imgLink.target = '_blank';
    let img = document.createElement('img');
    img.src = gift['imgUrl'];
    imgLink.appendChild(img);
    let title = document.createElement('a');
    title.target = '_blank';
    title.href = gift['pdUrl'];
    title.innerHTML = gift.name;
    title.classList.add('title');

    let price = document.createElement('div');
    price.innerHTML = gift.price;
    price.classList.add('price');

    cell.appendChild(imgLink);
    cell.appendChild(title);
    cell.appendChild(price);

    if (gift.isTaken) {
      let contri = document.createElement('div');
      contri.classList.add('taken');
      contri.innerHTML =
        '<i class="em em-lock"></i>&nbsp;TAKEN&nbsp;<i class="em em-lock"></i>';
      cell.appendChild(contri);
    } else {
      let contri = document.createElement('a');
      contri.classList.add('contri');
      contri.href = `https://api.whatsapp.com/send?phone=${getToNumber()}&text=${encodeURI(
        'Hey Vikram and Praneta, I want to gift you *' +
          gift['msgName'] +
          '* as your wedding gift 😁'
      )}`;
      contri.target = '_blank';
      contri.innerHTML = 'LET US KNOW';
      cell.appendChild(contri);
    }

    carousel.appendChild(cell);
  });
  let flkty = new Flickity(carousel, {
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
}

function getToNumber() {
  let n = '+919686528436';
  let forGuest = getParameterByName('guestFor');
  if (forGuest === 'forV') {
    n = '+919886922457';
  }
  return n;
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function compare(a, b) {
  if (a.value > b.value) return -1;
  if (a.value < b.value) return 1;
  return 0;
}
