export default function() {
  return {
    Timer: {
      compute: function() {
        var date1 = new Date();
        var date2 = new Date(2018, 5, 21, 19);
        var delta = Math.abs(date2 - date1) / 1000;
        var diffDays = Math.floor(delta / 86400);
        delta -= diffDays * 86400;
        var diffhours = Math.floor(delta / 3600) % 24;
        delta -= diffhours * 3600;
        var diffminutes = Math.floor(delta / 60) % 60;
        delta -= diffminutes * 60;
        var diffseconds = Math.floor(delta % 60);

        var days = document.querySelector('#days');
        var hours = document.querySelector('#hours');
        var mins = document.querySelector('#mins');
        var secs = document.querySelector('#secs');

        days.innerHTML = diffDays;
        hours.innerHTML = diffhours;
        mins.innerHTML = diffminutes;
        secs.innerHTML = diffseconds;
      },

      init: function() {
        var that = this;
        that.compute();
        setInterval(function() {
          that.compute();
        }, 1000);
      }
    }
  };
}
