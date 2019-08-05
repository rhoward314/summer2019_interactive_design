let clock = document.getElementById("clock");
let body = document.querySelector("body");

let path = anime.path('path');
let animation = anime({
  targets: '#clock',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'linear',
  duration: 60 * 1000,
  loop: true,
  autoplay: false
});

function findTime() {
  let date = new Date();
  let hh = date.getHours();
  let m = date.getMinutes();
  let mm = date.getMinutes();
  let s = date.getSeconds();
  let ss = date.getSeconds();
  let ms = date.getMilliseconds();
  let sms = s + (ms / 1000);

  if (mm.toString().length < 2) {
    mm = '0' + mm;
  }
  if (ss.toString().length < 2) {
    ss = '0' + ss;
  }

  let colorTime = 10*(hh+m/60);

  clock.innerHTML = `${hh}:${mm}:${ss}`;
  clock.style.fontSize = `${-24 * Math.cos(Math.PI * (m + (s / 60)) / 30) + 48}px`;
  clock.style.color = `rgb(${colorTime},${colorTime},${colorTime})`;
  body.style.background = `rgb(${255-colorTime},${255-colorTime},${255-colorTime})`;

  animation.seek(animation.duration * (sms / 60));
}

setInterval(function() {
  findTime();
}, 20);

findTime();
