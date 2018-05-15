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

window.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 12.914848, lng: 77.668975 },
    zoom: 18,
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
