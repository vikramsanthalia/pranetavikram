export default function() {
  return {
    Map: {
      init: function() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.setAttribute('defer', 'defer');
        script.setAttribute('async', 'async');
        script.src =
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyBPojWL30PB2wrndZ0-3LNFyRmO7uq0iso&libraries=places&callback=initMap';
        document.body.appendChild(script);
      }
    }
  };
}

var popup, Popup;

window.initMap = function() {
  definePopupClass();
  var latlng = new google.maps.LatLng(12.914848, 77.668975);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: latlng,
    zoom: 15,
    gestureHandling: 'none',
    mapTypeControl: false,
    streetViewControl: false,
    styles: [
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            hue: '#FF007B'
          },
          {
            saturation: 59.80000000000001
          },
          {
            lightness: 21
          },
          {
            gamma: 1
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            hue: '#FF00AF'
          },
          {
            saturation: 32.599999999999994
          },
          {
            lightness: 20.599999999999994
          },
          {
            gamma: 1
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            hue: '#FFAF00'
          },
          {
            lightness: 50.80000000000001
          },
          {
            gamma: 1
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'all',
        stylers: [
          {
            hue: '#FFE800'
          },
          {
            lightness: 8.600000000000009
          },
          {
            gamma: 1
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'all',
        stylers: [
          {
            hue: '#FFD900'
          },
          {
            saturation: 44.79999999999998
          },
          {
            lightness: 3.6000000000000085
          },
          {
            gamma: 1
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            hue: '#0078FF'
          },
          {
            saturation: 24.200000000000003
          },
          {
            gamma: 1
          }
        ]
      }
    ]
  });

  popup = new Popup(
    new google.maps.LatLng(12.914848, 77.668975),
    document.getElementById('content')
  );
  popup.setMap(map);

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.getDetails(
    {
      placeId: 'ChIJe5qpznETrjsRml-QZXpHj1c'
    },
    function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var icon = {
          url: '/images/heart.png', // url
          scaledSize: new google.maps.Size(40, 40) // scaled size
        };
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon: icon,
          labelContent: 'ABCD'
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(
            '<div><strong>' +
              place.name +
              '</strong><br>' +
              place.formatted_address +
              '</div>'
          );
          infowindow.open(map, this);
        });
      }
    }
  );
};

/** Defines the Popup class. */
function definePopupClass() {
  /**
   * A customized popup on the map.
   * @param {!google.maps.LatLng} position
   * @param {!Element} content
   * @constructor
   * @extends {google.maps.OverlayView}
   */
  Popup = function(position, content) {
    this.position = position;

    content.classList.add('popup-bubble-content');

    var pixelOffset = document.createElement('div');
    pixelOffset.classList.add('popup-bubble-anchor');
    pixelOffset.appendChild(content);

    this.anchor = document.createElement('div');
    this.anchor.classList.add('popup-tip-anchor');
    this.anchor.appendChild(pixelOffset);

    // Optionally stop clicks, etc., from bubbling up to the map.
    this.stopEventPropagation();
  };
  // NOTE: google.maps.OverlayView is only defined once the Maps API has
  // loaded. That is why Popup is defined inside initMap().
  Popup.prototype = Object.create(google.maps.OverlayView.prototype);

  /** Called when the popup is added to the map. */
  Popup.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.anchor);
  };

  /** Called when the popup is removed from the map. */
  Popup.prototype.onRemove = function() {
    if (this.anchor.parentElement) {
      this.anchor.parentElement.removeChild(this.anchor);
    }
  };

  /** Called when the popup needs to draw itself. */
  Popup.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
    // Hide the popup when it is far out of view.
    var display =
      Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
        ? 'block'
        : 'none';

    if (display === 'block') {
      this.anchor.style.left = divPosition.x + 'px';
      this.anchor.style.top = divPosition.y + 'px';
    }
    if (this.anchor.style.display !== display) {
      this.anchor.style.display = display;
    }
  };

  /** Stops clicks/drags from bubbling up to the map. */
  Popup.prototype.stopEventPropagation = function() {
    var anchor = this.anchor;
    anchor.style.cursor = 'auto';

    [
      'click',
      'dblclick',
      'contextmenu',
      'wheel',
      'mousedown',
      'touchstart',
      'pointerdown'
    ].forEach(function(event) {
      anchor.addEventListener(event, function(e) {
        e.stopPropagation();
      });
    });
  };
}
