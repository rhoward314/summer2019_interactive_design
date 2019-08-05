let elem = document.querySelector("#elem");
let body = document.querySelector("body");
let i = 0;

elem.onclick = function() {
  body.classList.toggle("lights_out");
  i += 1;
}

setInterval(function() {
  if (i % 2 == 1) {
    elem.innerHTML = "Lights on";
  } else {
    elem.innerHTML = "Lights out";
  }
}, 20);
