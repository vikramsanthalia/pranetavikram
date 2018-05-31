import Flickity from './flick/index';

export default function() {
  return {
    Gifts: {
      init: function() {
        getAndSet();
        // get('/gifts').then(function(response) {
        //   let ele = document.querySelector('#cell1');
        //   let data = JSON.parse(response);
        //   ele.innerHTML = data.gifts[1].name;
        //   //let res = JSON.parse(response);
        //   //ele.innerHTML = res.gifts[0].name;
        //   //let gifts = res.gifts;
        //   //let gifts = JSON.parse(response).gifts;
        //   // gifts[0].name = 'blah blah shits';
        //   // gifts.push({
        //   //   id: 3,
        //   //   url: 'blah blah blue',
        //   //   name: 'something is necessary',
        //   //   contributors: [
        //   //     {
        //   //       name: 'chukran',
        //   //       time: '0',
        //   //       phone: '876867698'
        //   //     }
        //   //   ]
        //   // });
        //   // let postData = { data: {} };
        //   // postData['data']['gifts'] = gifts;
        //   // postAjax('/gifts', JSON.stringify(postData), function(data) {
        //   //   get('/gifts').then(function(response) {
        //   //     let gifts = JSON.parse(response).gifts;
        //   //     let ele = document.querySelector('#cell1');
        //   //     ele.innerHTML = gifts;
        //   //   });
        //   // });
        // });
      }
    }
  };
}

function getAndSet() {
  get('/gifts').then(function(response) {
    let gifts = JSON.parse(response).gifts;
    var carousel = document.querySelector('.carousel');
    gifts.forEach(gift => {
      var cell = document.createElement('div');
      cell.classList.add('carousel-cell');
      cell.innerHTML = gift.name;
      carousel.appendChild(cell);
    });
    var flkty = new Flickity(carousel, {
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
}

function get(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
      if (xhr.status == 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    xhr.onerror = function() {
      reject(Error('Network Error'));
    };
    xhr.send();
  });
}

function postAjax(url, data, success) {
  var params =
    typeof data == 'string'
      ? data
      : Object.keys(data)
          .map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
          })
          .join('&');

  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('POST', url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState > 3 && xhr.status == 200) {
      success(xhr.responseText);
    }
  };
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(params);
  return xhr;
}
