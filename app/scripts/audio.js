export default function() {
  return {
    Audio: {
      compute: function() {
        let audio = document.querySelector('.audio');
        audio.volume = 0.0;
        let loud = document.querySelector('.em-loud_sound');
        let medium = document.querySelector('.em-sound');
        let silent = document.querySelector('.em-speaker');
        let control = document.querySelector('.volume-control');
        let state = 'LOUD';
        loud.style.display = 'block';
        medium.style.display = 'none';
        silent.style.display = 'none';
        audio.volume = 1.0;

        control.addEventListener('click', event => {
          switch (state) {
            case 'LOUD':
              loud.style.display = 'none';
              medium.style.display = 'none';
              silent.style.display = 'block';
              state = 'SILENT';
              audio.volume = 0.0;
              break;

            case 'SILENT':
              loud.style.display = 'none';
              medium.style.display = 'block';
              silent.style.display = 'none';
              state = 'MEDIUM';
              audio.volume = 0.5;
              break;

            case 'MEDIUM':
              loud.style.display = 'block';
              medium.style.display = 'none';
              silent.style.display = 'none';
              state = 'LOUD';
              audio.volume = 1.0;
              break;
          }
        });
        control.style.display = 'inline-block';
        audio.play();
      },

      init: function() {
        this.compute();
      }
    }
  };
}
