import Flickity from './flick/index';

let gifts = [
  {
    id: 1,
    imgUrl:
      'https://rukminim1.flixcart.com/image/832/832/j3q6snk0/racquet/r/g/m/g4-5-arcsaber-11-badminton-racquet-with-full-cover-strung-1-original-imaeusnameuwbnrp.jpeg?q=70',
    name: 'Yonex Badminton Racquet - For her',
    pdUrl:
      'https://www.flipkart.com/yonex-arcsaber-11-badminton-racquet-full-cover-red-unstrung/p/itmf3wj7zvmrrksh',
    isTaken: false
  },
  {
    id: 2,
    imgUrl:
      'https://rukminim1.flixcart.com/image/704/704/jcjejrk0/sunglass/4/t/m/0oo918891887659-59-oakley-original-imaffn5uttqytghc.jpeg?q=70',
    name: 'Oakley Sports Sunglasses - For him',
    pdUrl:
      'https://www.flipkart.com/oakley-sports-sunglasses/p/itmf3yh9xcqapddc',
    isTaken: false
  },
  {
    id: 3,
    imgUrl:
      'https://ii1.pepperfry.com/media/catalog/product/y/u/494x544/yuina-three-door-wardrobe-in-wenge-finish-by-mintwud-yuina-three-door-wardrobe-in-wenge-finish-by-mi-g5e1c5.jpg',
    name: 'Three Door Wardrobe',
    pdUrl:
      'https://www.pepperfry.com/yuina-three-door-wardrobe-wenge-finish-mintwud-1477945.html',
    isTaken: false
  },
  {
    id: 4,
    imgUrl:
      'https://rukminim1.flixcart.com/image/704/704/jawthu80/microwave-new/6/x/n/ce1041dsb2-xtl-samsung-original-imafydz5kjn28rhg.jpeg?q=70',
    name: 'Convection Microwave Oven',
    pdUrl:
      'https://www.flipkart.com/samsung-28-l-convection-microwave-oven/p/itmdzm9hxyfv3xxz?pid=MRCDZM93KNYFE6XN&srno=s_1_2&otracker=search&lid=LSTMRCDZM93KNYFE6XNSM5WAH&fm=SEARCH&iid=84816049-02fa-40a2-a558-677cecbfcc9d.MRCDZM93KNYFE6XN.SEARCH&ppt=Search%20Page&ppn=Search&ssid=mtqoyrky8g0000001527762359961&qH=6cfaeb6caa8c734d',
    isTaken: false
  },
  {
    id: 5,
    imgUrl:
      'https://ii1.pepperfry.com/media/catalog/product/b/r/494x544/brawny-shoe-rack-in-wenge-colour-by-hometown-brawny-shoe-rack-in-wenge-colour-by-hometown-4j04rs.jpg',
    name: 'Brawny Shoe Rack',
    pdUrl:
      'https://www.pepperfry.com/brawny-shoe-rack-in-wenge-colour-by-hometown-1539574.html',
    isTaken: false
  },
  {
    id: 6,
    imgUrl:
      'https://ii3.pepperfry.com/media/catalog/product/n/a/494x544/natural-finish-sheesham-wood-wall-shelf-with-2-drawers-by-woodsworth-natural-finish-sheesham-wood-wa-d4npdb.jpg',
    name: 'Solid Wood Wall Shelf',
    pdUrl:
      'https://www.pepperfry.com/natural-finish-sheesham-wood-wall-shelf-with-2-drawers-by-woodsworth-1666264.html',
    isTaken: false
  },
  {
    id: 7,
    imgUrl:
      'https://ii1.pepperfry.com/media/catalog/product/p/r/494x544/presto-multicolour-polyester-tufted-hand-knotted-floral-carpet-presto-multicolour-polyester-tufted-h-sjkufl.jpg',
    name: 'Hand Knotted Carpet',
    pdUrl:
      'https://www.pepperfry.com/presto-multicolour-polyester-tufted-hand-knotted-floral-carpet-1615047.html',
    isTaken: false
  },
  {
    id: 8,
    imgUrl:
      'https://rukminim1.flixcart.com/image/704/704/jerf7gw0/smart-band-tag/a/f/x/fb406bkxl-fitbit-original-imaf3dzyy3zmp52k.jpeg?q=70',
    name: 'Fitbit Alta - For him',
    pdUrl: 'https://www.flipkart.com/fitbit-alta/p/itmexgezjsx5wk7m',
    isTaken: false
  },
  {
    id: 9,
    imgUrl:
      'https://rukminim1.flixcart.com/image/704/704/jerf7gw0/smart-band-tag/a/f/x/fb406bkxl-fitbit-original-imaf3dzyy3zmp52k.jpeg?q=70',
    name: 'Fitbit Alta - For her',
    pdUrl: 'https://www.flipkart.com/fitbit-alta/p/itmexgezjsx5wk7m',
    isTaken: false
  },
  {
    id: 10,
    imgUrl:
      'https://ii1.pepperfry.com/media/catalog/product/s/h/494x544/sheesham-wood-and-brass-finish-tripod-floor-lamp-by-ethnic-roots-sheesham-wood-and-brass-finish-trip-vpmrzj.jpg',
    name: 'Brass Metal Tripod Lamp',
    pdUrl:
      'https://www.pepperfry.com/ethnic-roots-sheesham-wood-and-brass-finish-tripod-floor-lamp-1408494.html',
    isTaken: false
  }
];

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
  //get('/gifts').then(function(response) {
  //let gifts = JSON.parse(response).gifts;
  var carousel = document.querySelector('.carousel');
  gifts.forEach(gift => {
    let cell = document.createElement('div');
    cell.classList.add('carousel-cell');
    let img = document.createElement('img');
    img.src = gift['imgUrl'];
    let title = document.createElement('a');
    title.href = gift['pdUrl'];
    title.innerHTML = gift.name;
    title.classList.add('title');
    let contri = document.createElement('a');
    contri.classList.add('contri');
    contri.href = `https://api.whatsapp.com/send?phone=9886922457&text=${encodeURI(
      'I wanna gift you ' + gift.name
    )}`;
    contri.innerHTML = 'Get in touch!';
    cell.appendChild(img);
    cell.appendChild(title);
    cell.appendChild(contri);
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
  //});
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
