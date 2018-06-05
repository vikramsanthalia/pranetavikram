export default function() {
  return {
    Friends: {
      setClasses: function(grooms, current) {
        grooms.forEach((groom, index) => {
          if (current === index) {
            groom.classList.add('selected');
            groom.classList.remove('unselected');
          } else {
            groom.classList.add('unselected');
            groom.classList.remove('selected');
          }
        });
      },

      init: function() {
        let that = this;
        let currentGM = 0;
        let currentBM = 0;
        let grooms = document.querySelectorAll('.groomsmen .gm');
        let brides = document.querySelectorAll('.groomsmen .bm');
        that.setClasses(grooms, currentGM);
        that.setClasses(brides, currentBM);
        setInterval(function() {
          currentGM = currentGM === grooms.length - 1 ? 0 : currentGM + 1;

          that.setClasses(grooms, currentGM);
        }, 5000);

        setInterval(function() {
          currentBM = currentBM === brides.length - 1 ? 0 : currentBM + 1;

          that.setClasses(brides, currentBM);
        }, 4000);
      }
    }
  };
}
