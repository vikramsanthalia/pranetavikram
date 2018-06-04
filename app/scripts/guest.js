import { debug } from 'util';

export default function() {
  return {
    Guest: {
      setGuest: function() {
        let inviteConsole = this.getParameterByName('inviteConsole');
        if (inviteConsole === 'forP' || inviteConsole === 'forV') {
          let invite = document.querySelector('.inviteConsole');
          invite.classList.remove('hide');
          invite.classList.add('show');
          let guestEle = document.querySelector('.guestName');
          let generatedLink = document.querySelector('.generatedLink');
          let previewText = document.querySelector('.previewText');
          let submit = document.querySelector('.submit');
          let retrievedGuests = localStorage.getItem('guestval');
          if (retrievedGuests) {
            guestEle.value = retrievedGuests;
          }

          submit.addEventListener(
            'click',
            () => {
              let guestval = guestEle && guestEle.value;
              if (guestval) {
                localStorage.setItem('guestval', guestval);
                let guests = guestval.split(',');
                guests.forEach(guest => {
                  let encryptedGuestName = btoa(
                    'blahblahblue' + guest + 'blahblahblue'
                  );
                  let container = document.createElement('div');
                  container.classList.add('wrapped');
                  let name = document.createElement('div');
                  name.classList.add('guestName');
                  let aTag = document.createElement('a');
                  aTag.classList.add('aTag');
                  aTag.setAttribute(
                    'href',
                    `?guest=${encryptedGuestName}&guestFor=${inviteConsole}`
                  );
                  aTag.setAttribute('target', '_blank');
                  aTag.innerHTML = 'Sharable link';
                  name.innerHTML = this.getGuestName(
                    'guest',
                    `${
                      window.location.host
                    }?guest=${encryptedGuestName}&guestFor=${inviteConsole}`
                  );
                  container.appendChild(name);
                  container.appendChild(aTag);

                  previewText.appendChild(container);
                });
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
