const HOURHAND = document.querySelector ('#hour');
const MINUTEHAND = document.querySelector ('#minute');
const SECONDHAND = document.querySelector ('#second');

function clock () {
  var time = new Date ();
  var hr = time.getHours ();
  var min = time.getMinutes ();
  var sec = time.getSeconds ();

  let hrposition = hr * 30 + min * 0.5;
  let minposition = min * 6 + sec * 0.1;
  let secposition = sec * 6;

  HOURHAND.style.transform = 'rotate(' + hrposition + 'deg)';
  MINUTEHAND.style.transform = 'rotate(' + minposition + 'deg)';
  SECONDHAND.style.transform = 'rotate(' + secposition + 'deg)';
}

var interval = setInterval (clock, 1000);
