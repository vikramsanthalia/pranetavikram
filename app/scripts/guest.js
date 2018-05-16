import { debug } from 'util';

export default function() {
  return {
    Guest: {
      setGuest: function() {
        let inviteConsole = this.getParameterByName('inviteConsole');
        if (inviteConsole === '08910891') {
          let invite = document.querySelector('.inviteConsole');
          invite.classList.remove('hide');
          invite.classList.add('show');
          let guestEle = document.querySelector('.guestName');
          let generatedLink = document.querySelector('.generatedLink');
          let previewText = document.querySelector('.previewText');

          guestEle.addEventListener(
            'blur',
            () => {
              let guestval = guestEle && guestEle.value;
              if (guestval) {
                let encrypted = btoa(
                  'blahblahblue' + guestval + 'blahblahblue'
                );
                let aTag = document.createElement('a');
                aTag.setAttribute(
                  'href',
                  window.location.host + '?guest=' + encrypted
                );
                aTag.setAttribute('target', '_blank');
                aTag.innerHTML = 'Sharable link';
                generatedLink.appendChild(aTag);
                previewText.innerHTML = this.getGuestName(
                  'guest',
                  window.location.host + '?guest=' + encrypted
                );
              }
            },
            true
          );
        }
        let guestName = this.getGuestName('guest');
        let ele = document.querySelector('.guest');
        let guest = guestName && guestName.length > 0 ? guestName : 'Guest';
        ele.innerHTML = `Dear ${guest}&nbsp;,`;
      },

      getGuestName: function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        let guestName = atob(
          decodeURIComponent(results[2].replace(/\+/g, ' '))
        );
        if (guestName.indexOf('blahblahblue') > -1) {
          return guestName.split('blahblahblue').join('');
        }
        return null;
      },

      getParameterByName: function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';

        return decodeURIComponent(results[2].replace(/\+/g, ' '));
      }
    }
  };
}
