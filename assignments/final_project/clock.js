let clock = document.getElementById("clock");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let body = document.querySelector("body");

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

  hours.innerHTML = `${hh}`;
  minutes.innerHTML = `${mm}`;
  seconds.innerHTML = `${ss}`;
  // clock.innerHTML = `${hh}:${mm}:${ss}`;
  clock.style.left = `${1.33 * sms}vw`;
  clock.style.top = `${1.46 * sms}vh`;
  clock.style.fontSize = `${sms + 10}px`;
  clock.style.color = `rgb(${4*sms},${4*sms},${4*sms})`;
  body.style.background = `rgb(${255-(4*sms)},${255-(4*sms)},${255-(4*sms)})`;
}

setInterval(function() {
  findTime();
}, 20);

findTime();
